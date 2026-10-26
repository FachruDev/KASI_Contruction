/**
 * One-off import of the content that lived in the old PocketBase CMS.
 *
 *   bun run migrate:pocketbase dry-run          # list what would be imported, write nothing
 *   bun run migrate:pocketbase                  # import
 *   bun run migrate:pocketbase with-inquiries   # also copy leads (needs PB_SUPERUSER_EMAIL / PB_SUPERUSER_PASSWORD)
 *
 * Options are plain words because `payload run` only forwards positional arguments.
 *
 * Reads POCKETBASE_URL (default https://kasiservices.ryucode.site). Safe to re-run: every record is
 * matched on its slug (or name/question) and updated in place, and files are uploaded once.
 *
 * Site settings and home page copy are not imported; they were re-curated in Payload already.
 */
import config from "@payload-config";
import { convertHTMLToLexical, editorConfigFactory } from "@payloadcms/richtext-lexical";
import { mkdtemp, rm, writeFile } from "fs/promises";
import { JSDOM } from "jsdom";
import os from "os";
import path from "path";
import { getPayload, type Payload } from "payload";
import { slugify } from "@/cms/fields/slug";

type PbRecord = Record<string, unknown> & { id: string; collectionName: string };

const PB = (process.env.POCKETBASE_URL ?? "https://kasiservices.ryucode.site").replace(/\/$/, "");
const DRY_RUN = process.argv.includes("dry-run");
const WITH_INQUIRIES = process.argv.includes("with-inquiries");
const context = () => ({ skipRevalidate: true });

// ── PocketBase access ────────────────────────────────────────────────────────

let authToken: string | undefined;

async function pbFetch<T>(pathname: string): Promise<T> {
  const response = await fetch(`${PB}${pathname}`, {
    headers: { Accept: "application/json", ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
    signal: AbortSignal.timeout(60_000),
  });
  if (!response.ok) throw new Error(`PocketBase ${pathname} → ${response.status} ${response.statusText}`);
  return (await response.json()) as T;
}

async function list(collection: string, query = ""): Promise<PbRecord[]> {
  const items: PbRecord[] = [];
  for (let page = 1; ; page++) {
    const data = await pbFetch<{ items: PbRecord[]; totalPages: number }>(`/api/collections/${collection}/records?perPage=200&page=${page}${query}`);
    items.push(...data.items);
    if (page >= data.totalPages) return items;
  }
}

const str = (record: PbRecord | undefined, field: string) => (typeof record?.[field] === "string" ? (record[field] as string).trim() : "");
const num = (record: PbRecord | undefined, field: string) => (typeof record?.[field] === "number" && Number.isFinite(record[field]) ? (record[field] as number) : undefined);
const files = (record: PbRecord, field: string) => {
  const value = record[field];
  return (Array.isArray(value) ? value : [value]).filter((name): name is string => typeof name === "string" && Boolean(name));
};
const published = (record: PbRecord) => (record.status === undefined || record.status === "published" ? "published" : "draft") as "published" | "draft";
const stripHtml = (html: string) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
/** First paragraph of an HTML body, used when a record has no separate summary. */
const firstParagraph = (html: string) => stripHtml(html.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? html).slice(0, 280);
const bySort = (a: PbRecord, b: PbRecord) => (num(a, "sort_order") ?? 0) - (num(b, "sort_order") ?? 0);

// ── Payload helpers ──────────────────────────────────────────────────────────

let tmpDir = "";
const mediaCache = new Map<string, number>();

/** Downloads a PocketBase file once and returns the Payload media id holding it. */
async function media(payload: Payload, record: PbRecord, filename: string, alt: string): Promise<number | undefined> {
  if (!filename) return undefined;
  const key = `${record.collectionName}/${record.id}/${filename}`;
  if (mediaCache.has(key)) return mediaCache.get(key);

  // Uploads are converted to webp, so the stored name is the original stem plus .webp.
  const stem = path.parse(filename).name;
  const existing = await payload.find({ collection: "media", where: { filename: { equals: `${stem}.webp` } }, limit: 1, depth: 0 });
  if (existing.docs[0]) {
    mediaCache.set(key, existing.docs[0].id);
    return existing.docs[0].id;
  }
  if (DRY_RUN) return undefined;

  const response = await fetch(`${PB}/api/files/${record.collectionName}/${record.id}/${encodeURIComponent(filename)}`, { signal: AbortSignal.timeout(120_000) });
  if (!response.ok) {
    payload.logger.warn(`skip file ${key}: ${response.status}`);
    return undefined;
  }
  const filePath = path.join(tmpDir, filename);
  await writeFile(filePath, Buffer.from(await response.arrayBuffer()));
  const doc = await payload.create({ collection: "media", data: { alt: alt || stem }, filePath, context: context() });
  mediaCache.set(key, doc.id);
  return doc.id;
}

async function upsert<T extends Parameters<Payload["create"]>[0]["collection"]>(
  payload: Payload,
  collection: T,
  where: Record<string, { equals: unknown }>,
  data: Record<string, unknown>,
  label: string,
) {
  const existing = await payload.find({ collection, where, limit: 1, depth: 0, draft: true });
  if (DRY_RUN) {
    payload.logger.info(`[dry-run] ${existing.docs[0] ? "update" : "create"} ${collection}: ${label}`);
    return existing.docs[0]?.id as number | undefined;
  }
  const doc = existing.docs[0]
    ? await payload.update({ collection, id: existing.docs[0].id, data: data as never, context: context() })
    : await payload.create({ collection, data: data as never, context: context() });
  payload.logger.info(`${existing.docs[0] ? "updated" : "created"} ${collection}: ${label}`);
  return doc.id as number;
}

// ── Import ───────────────────────────────────────────────────────────────────

async function run() {
  const payload = await getPayload({ config });
  const editorConfig = await editorConfigFactory.default({ config: payload.config });
  const lexical = (html: string) => (html.trim() ? convertHTMLToLexical({ editorConfig, html, JSDOM }) : undefined);
  tmpDir = await mkdtemp(path.join(os.tmpdir(), "kasi-pb-"));

  try {
    payload.logger.info(`Reading ${PB}${DRY_RUN ? " (dry run)" : ""}`);

    // Services and their benefit rows.
    const [services, benefits] = await Promise.all([list("services"), list("service_benefits")]);
    for (const record of services.sort(bySort)) {
      const title = str(record, "title");
      const slug = str(record, "slug") || slugify(title);
      const unit = str(record, "price_unit");
      await upsert(payload, "services", { slug: { equals: slug } }, {
        title,
        slug,
        summary: str(record, "description") || title,
        image: await media(payload, record, str(record, "image"), str(record, "image_alt") || title),
        benefits: benefits.filter((b) => b.service === record.id).sort(bySort).map((b) => ({ text: str(b, "title") })),
        idealFor: str(record, "ideal_for"),
        price: { amount: num(record, "price"), unit: unit === "project" ? "project" : unit === "request_quote" ? "quote" : "m2" },
        featured: record.is_recommended === true,
        _status: published(record),
      }, title);
    }

    // Portfolio.
    const categoryIds = new Map<string, number | undefined>();
    for (const record of (await list("portfolio_categories")).sort(bySort)) {
      const title = str(record, "title");
      const slug = str(record, "slug") || slugify(title);
      categoryIds.set(record.id, await upsert(payload, "project-categories", { slug: { equals: slug } }, { title, slug }, title));
    }
    for (const record of (await list("portfolios")).sort(bySort)) {
      const title = str(record, "title");
      const slug = str(record, "slug") || slugify(title);
      const html = str(record, "description");
      const gallery = [];
      for (const file of files(record, "gallery")) {
        const id = await media(payload, record, file, `Galeri ${title}`);
        if (id) gallery.push(id);
      }
      await upsert(payload, "projects", { slug: { equals: slug } }, {
        title,
        slug,
        summary: str(record, "subtitle") || firstParagraph(html) || title,
        body: lexical(html),
        category: categoryIds.get(String(record.category)),
        cover: await media(payload, record, str(record, "cover_image"), str(record, "cover_image_alt") || title),
        gallery,
        beforeAfter: {
          before: await media(payload, record, str(record, "before_image"), `Kondisi sebelum proyek ${title}`),
          after: await media(payload, record, str(record, "after_image"), `Hasil proyek ${title}`),
        },
        location: str(record, "location"),
        areaM2: num(record, "area_m2"),
        year: num(record, "year"),
        featured: record.is_featured === true,
        _status: published(record),
      }, title);
    }

    // Testimonials.
    for (const record of (await list("testimonials")).sort(bySort)) {
      const name = str(record, "name");
      await upsert(payload, "testimonials", { name: { equals: name } }, {
        name,
        role: str(record, "company_name"),
        service: str(record, "service_label"),
        rating: Math.min(5, Math.max(1, Number(record.rating) || 5)),
        quote: str(record, "message") || "-",
        avatar: await media(payload, record, str(record, "profile_image"), name),
        projectImage: await media(payload, record, str(record, "testimonial_image"), `Proyek ${name}`),
        _status: "published",
      }, name);
    }

    // FAQ.
    const faqCategoryIds = new Map<string, number | undefined>();
    for (const record of (await list("faq_categories")).sort(bySort)) {
      const title = str(record, "title");
      faqCategoryIds.set(record.id, await upsert(payload, "faq-categories", { title: { equals: title } }, { title }, title));
    }
    for (const record of (await list("faqs")).sort(bySort)) {
      const question = str(record, "title");
      await upsert(payload, "faqs", { question: { equals: question } }, {
        question,
        answer: stripHtml(str(record, "description")),
        category: faqCategoryIds.get(String(record.category)),
        _status: "published",
      }, question);
    }

    // Articles.
    const articleCategoryIds = new Map<string, number | undefined>();
    for (const record of (await list("article_categories")).sort(bySort)) {
      const title = str(record, "title");
      const slug = str(record, "slug") || slugify(title);
      articleCategoryIds.set(record.id, await upsert(payload, "article-categories", { slug: { equals: slug } }, { title, slug }, title));
    }
    for (const record of await list("articles", "&sort=-published_at")) {
      const title = str(record, "title");
      const slug = str(record, "slug") || slugify(title);
      await upsert(payload, "articles", { slug: { equals: slug } }, {
        title,
        slug,
        excerpt: str(record, "excerpt") || title,
        content: lexical(str(record, "content")) ?? lexical(`<p>${title}</p>`),
        category: articleCategoryIds.get(String(record.category)),
        cover: await media(payload, record, str(record, "cover_image"), str(record, "cover_image_alt") || title),
        publishedAt: str(record, "published_at") || undefined,
        featured: record.is_featured === true,
        _status: published(record),
      }, title);
    }

    // Legal pages replace the bundled drafts when PocketBase has the real text.
    for (const record of await list("legal_pages")) {
      const page = str(record, "slug");
      if (page !== "privacy-policy" && page !== "terms-of-service") continue;
      const content = lexical(str(record, "content"));
      if (!content) continue;
      await upsert(payload, "legal-pages", { page: { equals: page } }, { page, title: str(record, "title") || page, content, _status: published(record) }, page);
    }

    if (WITH_INQUIRIES) {
      const auth = await fetch(`${PB}/api/collections/_superusers/auth-with-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identity: process.env.PB_SUPERUSER_EMAIL, password: process.env.PB_SUPERUSER_PASSWORD }),
      });
      if (!auth.ok) throw new Error(`PocketBase superuser login failed: ${auth.status}`);
      authToken = ((await auth.json()) as { token: string }).token;
      for (const record of await list("inquiries", "&sort=created")) {
        const label = `${str(record, "name")} (${str(record, "created")})`;
        const exists = await payload.count({ collection: "inquiries", where: { and: [{ phone: { equals: str(record, "phone") } }, { name: { equals: str(record, "name") } }] } });
        if (exists.totalDocs) continue;
        if (DRY_RUN) {
          payload.logger.info(`[dry-run] create inquiries: ${label}`);
          continue;
        }
        await payload.create({
          collection: "inquiries",
          overrideAccess: true,
          context: context(),
          data: {
            name: str(record, "name"),
            phone: str(record, "phone"),
            location: str(record, "location") || "-",
            requirement: (str(record, "requirement") || "other") as never,
            areaM2: num(record, "area_m2"),
            detail: str(record, "detail"),
            status: (str(record, "status") === "closed" ? "won" : str(record, "status") || "new") as never,
            sourceUrl: str(record, "source_url"),
          },
        });
        payload.logger.info(`created inquiries: ${label}`);
      }
    }

    payload.logger.info(DRY_RUN ? "Dry run complete; nothing was written." : "PocketBase import complete.");
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }
  process.exit(0);
}

await run();
