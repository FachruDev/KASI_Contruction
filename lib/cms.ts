import "server-only";
import config from "@payload-config";
import { getPayload, type Where } from "payload";
import { cache } from "react";
import { HOME_DEFAULTS, PAGE_DEFAULTS, SITE_DEFAULTS } from "@/cms/defaults";
import { PUBLISHED } from "@/cms/access";
import type { Article, ArticleCategory, FaqCategory, Media, Project, ProjectCategory } from "@/payload-types";
import type {
  ArticleDetail,
  ArticleSummary,
  Category,
  CtaContent,
  FaqSection,
  HomeData,
  Img,
  LegalPage,
  PageContent,
  ProjectDetail,
  ProjectSummary,
  ServiceItem,
  SiteConfig,
  Testimonial,
} from "@/lib/types";

export { createWhatsAppUrl } from "@/lib/whatsapp";
export type * from "@/lib/types";

/** Local photos used until an editor uploads replacements in the admin. */
const STOCK = {
  hero: { src: "/assets/images/landing/landing1.jpeg", alt: "Alat pemadat menggilas aspal baru di jalan perumahan" },
  roller: { src: "/assets/images/landing/landing2.jpeg", alt: "Alat pemadat KASI di jalan perumahan yang baru diaspal" },
  crew: { src: "/assets/images/services/services3.jpeg", alt: "Tim KASI meratakan lapisan aspal hotmix" },
} satisfies Record<string, Img>;

const payload = cache(() => getPayload({ config }));

// ── Mapping helpers ──────────────────────────────────────────────────────────

function image(value: number | Media | null | undefined, fallback: Img): Img;
function image(value: number | Media | null | undefined): Img | undefined;
function image(value: number | Media | null | undefined, fallback?: Img) {
  if (!value || typeof value === "number" || !value.url) return fallback;
  const position = value.focalX != null && value.focalY != null ? `${value.focalX}% ${value.focalY}%` : undefined;
  // Payload prefixes serverURL when it is configured; keep files same-origin so next/image treats them as local.
  const { pathname, search } = new URL(value.url, "http://local");
  return { src: pathname + search, alt: value.alt, position };
}

function category(value: number | ProjectCategory | ArticleCategory | null | undefined, fallback: Category): Category {
  return value && typeof value === "object" ? { title: value.title, slug: value.slug ?? "" } : fallback;
}

/** Treats empty strings from the admin like missing values so defaults still apply. */
function or(value: string | null | undefined, fallback: string) {
  return value?.trim() ? value : fallback;
}

function rupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);
}

function initials(name: string) {
  return name.split(/\s+/).filter(Boolean).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

export function formatDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

// ── Globals ──────────────────────────────────────────────────────────────────

export const getSiteConfig = cache(async (): Promise<SiteConfig> => {
  const doc = await (await payload()).findGlobal({ slug: "site-settings", depth: 1 });
  return {
    companyName: or(doc.companyName, SITE_DEFAULTS.companyName),
    legalName: or(doc.legalName, SITE_DEFAULTS.legalName),
    footerTagline: or(doc.footerTagline, SITE_DEFAULTS.footerTagline),
    copyright: or(doc.copyright, SITE_DEFAULTS.copyright),
    metaTitle: or(doc.metaTitle, SITE_DEFAULTS.metaTitle),
    metaDescription: or(doc.metaDescription, SITE_DEFAULTS.metaDescription),
    ogImage: image(doc.ogImage)?.src,
    favicon: image(doc.favicon)?.src,
    whatsappPhone: or(doc.whatsappPhone, SITE_DEFAULTS.whatsappPhone),
    whatsappMessage: or(doc.whatsappMessage, SITE_DEFAULTS.whatsappMessage),
    email: or(doc.email, SITE_DEFAULTS.email),
    address: or(doc.address, SITE_DEFAULTS.address),
    mapsEmbedUrl: or(doc.mapsEmbedUrl, SITE_DEFAULTS.mapsEmbedUrl),
    businessHours: doc.businessHours?.length
      ? doc.businessHours.map((row) => ({ label: row.label, open: row.open ?? "", close: row.close ?? "", closed: Boolean(row.closed) }))
      : SITE_DEFAULTS.businessHours,
  };
});

export const getHomeData = cache(async (): Promise<HomeData> => {
  const doc = await (await payload()).findGlobal({ slug: "home-page", depth: 1 });
  const d = HOME_DEFAULTS;
  return {
    hero: {
      eyebrow: or(doc.hero?.eyebrow, d.hero.eyebrow),
      title: or(doc.hero?.title, d.hero.title),
      subtitle: or(doc.hero?.subtitle, d.hero.subtitle),
      image: image(doc.hero?.image, STOCK.hero),
      ctaLabel: or(doc.hero?.ctaLabel, d.hero.ctaLabel),
      whatsappMessage: doc.hero?.whatsappMessage ?? "",
    },
    stats: doc.stats?.length ? doc.stats.map(({ value, label }) => ({ value, label })) : d.stats,
    about: {
      eyebrow: or(doc.about?.eyebrow, d.about.eyebrow),
      note: or(doc.about?.note, d.about.note),
      statement: or(doc.about?.statement, d.about.statement),
      primaryImage: image(doc.about?.primaryImage, STOCK.roller),
      secondaryImage: image(doc.about?.secondaryImage, STOCK.crew),
      caption: or(doc.about?.caption, d.about.caption),
    },
    services: { eyebrow: or(doc.services?.eyebrow, d.services.eyebrow), heading: or(doc.services?.heading, d.services.heading) },
    highlights: {
      eyebrow: or(doc.highlights?.eyebrow, d.highlights.eyebrow),
      heading: or(doc.highlights?.heading, d.highlights.heading),
      description: or(doc.highlights?.description, d.highlights.description),
      image: image(doc.highlights?.image, STOCK.hero),
      imageCaption: or(doc.highlights?.imageCaption, d.highlights.imageCaption),
      items: doc.highlights?.items?.length
        ? doc.highlights.items.map((item) => ({ icon: item.icon ?? "verified", title: item.title, description: item.description }))
        : d.highlights.items,
    },
    portfolio: { eyebrow: or(doc.portfolio?.eyebrow, d.portfolio.eyebrow), heading: or(doc.portfolio?.heading, d.portfolio.heading) },
    cta: {
      title: or(doc.cta?.title, d.cta.title),
      subtitle: or(doc.cta?.subtitle, d.cta.subtitle),
      buttonLabel: or(doc.cta?.buttonLabel, d.cta.buttonLabel),
      whatsappMessage: doc.cta?.whatsappMessage ?? undefined,
      image: image(doc.cta?.image, STOCK.roller),
    },
  };
});

export const getPageContent = cache(async (): Promise<PageContent> => {
  const doc = await (await payload()).findGlobal({ slug: "page-content", depth: 1 });
  const d = PAGE_DEFAULTS;
  const header = (value: { eyebrow?: string | null; title?: string | null; description?: string | null } | undefined, fallback: { eyebrow: string; title: string; description: string }) => ({
    eyebrow: or(value?.eyebrow, fallback.eyebrow),
    title: or(value?.title, fallback.title),
    description: or(value?.description, fallback.description),
  });
  const cta: CtaContent = {
    title: or(doc.cta?.title, d.cta.title),
    subtitle: or(doc.cta?.subtitle, d.cta.subtitle),
    buttonLabel: or(doc.cta?.buttonLabel, d.cta.buttonLabel),
    image: image(doc.cta?.image, STOCK.roller),
  };

  return {
    services: {
      ...header(doc.services, d.services),
      priceNote: or(doc.services?.priceNote, d.services.priceNote),
      processEyebrow: or(doc.services?.processEyebrow, d.services.processEyebrow),
      processHeading: or(doc.services?.processHeading, d.services.processHeading),
      processSteps: doc.services?.processSteps?.length ? doc.services.processSteps.map(({ title, description }) => ({ title, description })) : d.services.processSteps,
    },
    portfolio: header(doc.portfolio, d.portfolio),
    testimonials: header(doc.testimonials, d.testimonials),
    articles: header(doc.articles, d.articles),
    faq: {
      ...header(doc.faq, d.faq),
      supportTitle: or(doc.faq?.supportTitle, d.faq.supportTitle),
      supportText: or(doc.faq?.supportText, d.faq.supportText),
    },
    contact: header(doc.contact, d.contact),
    cta,
  };
});

// ── Collections ──────────────────────────────────────────────────────────────

const UNIT_LABEL: Record<string, string> = { m2: "/m²", project: "/proyek" };

export const getServices = cache(async (): Promise<ServiceItem[]> => {
  const { docs } = await (await payload()).find({ collection: "services", where: PUBLISHED, sort: "_order", depth: 1, limit: 50, draft: false });
  return docs.map((doc) => {
    const quoted = doc.price?.unit === "quote" || doc.price?.amount == null;
    return {
      slug: doc.slug ?? "",
      title: doc.title,
      summary: doc.summary,
      image: image(doc.image, STOCK.crew),
      benefits: doc.benefits?.map((benefit) => benefit.text) ?? [],
      idealFor: doc.idealFor ?? "",
      price: quoted ? undefined : rupiah(doc.price!.amount!),
      priceUnit: quoted ? undefined : UNIT_LABEL[doc.price?.unit ?? "m2"],
      featured: Boolean(doc.featured),
    };
  });
});

function toProjectSummary(doc: Project): ProjectSummary {
  return {
    slug: doc.slug ?? "",
    title: doc.title,
    summary: doc.summary,
    image: image(doc.cover, STOCK.roller),
    category: category(doc.category, { title: "Portfolio", slug: "portfolio" }),
    location: doc.location ?? undefined,
    area: doc.areaM2 ? `${doc.areaM2.toLocaleString("id-ID")} m²` : undefined,
    year: doc.year ? String(doc.year) : undefined,
    beforeAfter: Boolean(doc.beforeAfter?.before && doc.beforeAfter?.after),
  };
}

export const getPortfolio = cache(async (): Promise<{ categories: Category[]; projects: ProjectSummary[] }> => {
  const client = await payload();
  const [categories, projects] = await Promise.all([
    client.find({ collection: "project-categories", sort: "_order", limit: 50 }),
    client.find({ collection: "projects", where: PUBLISHED, sort: "_order", depth: 1, limit: 200, draft: false }),
  ]);
  const used = new Set(projects.docs.map((doc) => (typeof doc.category === "object" ? doc.category?.id : doc.category)));
  return {
    // Hide categories with nothing published so visitors never land on an empty filter.
    categories: categories.docs.filter((doc) => used.has(doc.id)).map((doc) => ({ title: doc.title, slug: doc.slug ?? "" })),
    projects: projects.docs.map(toProjectSummary),
  };
});

/** Featured projects first, topped up with the rest so the home page always shows a full set. */
export const getShowcaseProjects = cache(async (count = 4): Promise<ProjectSummary[]> => {
  const { projects } = await getPortfolio();
  const featuredSlugs = new Set(
    (await (await payload()).find({ collection: "projects", where: { and: [PUBLISHED, { featured: { equals: true } }] }, sort: "_order", limit: count, depth: 0, draft: false })).docs.map(
      (doc) => doc.slug,
    ),
  );
  return [...projects.filter((project) => featuredSlugs.has(project.slug)), ...projects.filter((project) => !featuredSlugs.has(project.slug))].slice(0, count);
});

export const getProjectBySlug = cache(async (slug: string): Promise<ProjectDetail | null> => {
  const { docs } = await (await payload()).find({ collection: "projects", where: { and: [PUBLISHED, { slug: { equals: slug } }] }, depth: 1, limit: 1, draft: false });
  const doc = docs[0];
  if (!doc) return null;
  return {
    ...toProjectSummary(doc),
    body: (doc.body as ProjectDetail["body"]) ?? null,
    gallery: (doc.gallery ?? []).map((item) => image(item)).filter((item): item is Img => Boolean(item)),
    before: image(doc.beforeAfter?.before),
    after: image(doc.beforeAfter?.after),
  };
});

export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
  const { docs } = await (await payload()).find({ collection: "testimonials", where: PUBLISHED, sort: "_order", depth: 1, limit: 100, draft: false });
  return docs.map((doc) => ({
    name: doc.name,
    role: doc.role ?? "",
    service: doc.service ?? doc.role ?? "",
    rating: doc.rating,
    quote: doc.quote,
    initials: initials(doc.name),
    avatar: image(doc.avatar),
    projectImage: image(doc.projectImage),
  }));
});

export const getFaqSections = cache(async (): Promise<FaqSection[]> => {
  const client = await payload();
  const [categories, faqs] = await Promise.all([
    client.find({ collection: "faq-categories", sort: "_order", limit: 50 }),
    client.find({ collection: "faqs", where: PUBLISHED, sort: "_order", depth: 0, limit: 500, draft: false }),
  ]);
  return categories.docs
    .map((cat: FaqCategory) => ({
      title: cat.title,
      items: faqs.docs.filter((faq) => (typeof faq.category === "object" ? faq.category.id : faq.category) === cat.id).map(({ question, answer }) => ({ question, answer })),
    }))
    .filter((section) => section.items.length);
});

function toArticleSummary(doc: Article): ArticleSummary {
  return {
    slug: doc.slug ?? "",
    href: `/articles/${doc.slug}`,
    title: doc.title,
    category: category(doc.category, { title: "Artikel", slug: "artikel" }).title,
    excerpt: doc.excerpt,
    image: image(doc.cover),
    publishedAt: doc.publishedAt ?? undefined,
  };
}

export const getArticles = cache(async (): Promise<{ featured: ArticleSummary | null; articles: ArticleSummary[] }> => {
  const { docs } = await (await payload()).find({ collection: "articles", where: PUBLISHED, sort: "-publishedAt", depth: 1, limit: 200, draft: false });
  if (!docs.length) return { featured: null, articles: [] };
  const featuredIndex = Math.max(0, docs.findIndex((doc) => doc.featured));
  return {
    featured: toArticleSummary(docs[featuredIndex]),
    articles: docs.filter((_, index) => index !== featuredIndex).map(toArticleSummary),
  };
});

export const getArticleBySlug = cache(async (slug: string): Promise<ArticleDetail | null> => {
  const { docs } = await (await payload()).find({ collection: "articles", where: { and: [PUBLISHED, { slug: { equals: slug } }] }, depth: 1, limit: 1, draft: false });
  const doc = docs[0];
  return doc ? { ...toArticleSummary(doc), content: doc.content as ArticleDetail["content"] } : null;
});

export const getLegalPage = cache(async (page: "privacy-policy" | "terms-of-service"): Promise<LegalPage | null> => {
  const { docs } = await (await payload()).find({ collection: "legal-pages", where: { and: [PUBLISHED, { page: { equals: page } }] }, limit: 1, draft: false });
  const doc = docs[0];
  return doc ? { title: doc.title, content: doc.content as LegalPage["content"] } : null;
});

export const getContentSlugs = cache(async () => {
  const client = await payload();
  const select = { where: PUBLISHED as Where, depth: 0, limit: 1000, draft: false, select: { slug: true } } as const;
  const [projects, articles] = await Promise.all([client.find({ collection: "projects", ...select }), client.find({ collection: "articles", ...select })]);
  return {
    projects: projects.docs.map((doc) => doc.slug).filter((slug): slug is string => Boolean(slug)),
    articles: articles.docs.map((doc) => doc.slug).filter((slug): slug is string => Boolean(slug)),
  };
});
