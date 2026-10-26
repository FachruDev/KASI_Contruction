/**
 * Fills an empty database with KASI's existing site content so the site and admin start complete.
 * Safe to re-run: records are matched by alt text, slug, or page key and only created when missing.
 *
 *   bun run seed
 *
 * Portfolio, testimonials, FAQ, and articles are deliberately not seeded; their real content comes
 * from the PocketBase migration rather than placeholder copy.
 */
import config from "@payload-config";
import path from "path";
import { fileURLToPath } from "url";
import { getPayload, type Payload } from "payload";
import { HOME_DEFAULTS, PAGE_DEFAULTS, SITE_DEFAULTS } from "@/cms/defaults";
import { PRIVACY_SECTIONS, TERMS_SECTIONS } from "@/data/legal";
import { sectionsToLexical } from "@/cms/seed/lexical";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
// A fresh object per call: Payload hooks write flags onto the request context, and the storage
// plugin skips uploads while its own flag is set, so a shared object leaks between operations.
const context = () => ({ skipRevalidate: true });

const PHOTOS = {
  roller: { file: "public/assets/images/landing/landing1.jpeg", alt: "Alat pemadat menggilas aspal baru di jalan perumahan" },
  rollerClose: { file: "public/assets/images/landing/landing2.jpeg", alt: "Alat pemadat KASI di jalan perumahan yang baru diaspal" },
  hotmix: { file: "public/assets/images/services/services1.jpeg", alt: "Pekerjaan pelapisan aspal hotmix" },
  overlay: { file: "public/assets/images/services/services2.jpeg", alt: "Pekerjaan pelapisan ulang aspal" },
  newRoad: { file: "public/assets/images/services/services3.jpeg", alt: "Tim KASI meratakan lapisan aspal di jalan baru" },
  lapen: { file: "public/assets/images/services/services4.jpeg", alt: "Pekerjaan pengaspalan metode penetrasi Lapen" },
  finished: { file: "public/assets/images/faq/faq1.jpeg", alt: "Jalan perumahan yang baru selesai diaspal" },
} as const;

const SERVICES = [
  {
    title: "Basic - Pelapisan Hotmix",
    summary: "Solusi pelapisan aspal hotmix untuk meningkatkan kualitas dan tampilan permukaan jalan yang sudah tersedia.",
    photo: "hotmix",
    benefits: ["Praktis dan ekonomis", "Permukaan lebih rapi dan kuat"],
    idealFor: "Jalan lingkungan, area parkir, dan akses usaha",
    amount: 85000,
  },
  {
    title: "Overlay - Pelapisan Ulang Aspal",
    summary: "Pelapisan ulang pada permukaan aspal lama untuk mengembalikan kondisi jalan agar lebih rata, kuat, dan nyaman digunakan.",
    photo: "overlay",
    benefits: ["Memperbaiki permukaan lama", "Lebih cepat dibanding pembangunan dari awal"],
    idealFor: "Jalan lama, area parkir, dan kawasan usaha",
    amount: 100000,
  },
  {
    title: "Premium - Pengaspalan Jalan Baru",
    summary: "Paket pengaspalan dari tahap persiapan tanah hingga finishing untuk membangun jalan baru dengan struktur yang lebih kuat dan tahan lama.",
    photo: "newRoad",
    benefits: ["Struktur jalan lebih kuat", "Cocok untuk pembangunan dari awal"],
    idealFor: "Jalan baru, kawasan perumahan, akses proyek, dan area komersial",
    amount: 150000,
  },
  {
    title: "Lapen - Pengaspalan Penetrasi",
    summary: "Metode pengaspalan penetrasi dengan lapisan agregat dan aspal yang dipadatkan secara bertahap untuk menghasilkan permukaan jalan yang kokoh.",
    photo: "lapen",
    benefits: ["Konstruksi kokoh", "Pilihan ekonomis untuk kebutuhan tertentu"],
    idealFor: "Jalan lingkungan, akses kawasan, dan jalan dengan lalu lintas ringan hingga sedang",
    amount: 110000,
  },
] as const;

async function uploadPhotos(payload: Payload) {
  const ids = {} as Record<keyof typeof PHOTOS, number>;
  for (const [key, photo] of Object.entries(PHOTOS) as [keyof typeof PHOTOS, (typeof PHOTOS)[keyof typeof PHOTOS]][]) {
    const existing = await payload.find({ collection: "media", where: { alt: { equals: photo.alt } }, limit: 1, depth: 0 });
    ids[key] = existing.docs[0]?.id ?? (await payload.create({ collection: "media", data: { alt: photo.alt }, filePath: path.join(root, photo.file), context: context() })).id;
    payload.logger.info(`media: ${photo.alt}`);
  }
  return ids;
}

async function seed() {
  const payload = await getPayload({ config });
  const photos = await uploadPhotos(payload);

  await payload.updateGlobal({ slug: "site-settings", data: { ...SITE_DEFAULTS }, context: context() });

  await payload.updateGlobal({
    slug: "home-page",
    context: context(),
    data: {
      hero: { ...HOME_DEFAULTS.hero, image: photos.roller },
      stats: HOME_DEFAULTS.stats,
      about: { ...HOME_DEFAULTS.about, primaryImage: photos.rollerClose, secondaryImage: photos.newRoad },
      services: HOME_DEFAULTS.services,
      highlights: { ...HOME_DEFAULTS.highlights, image: photos.roller, items: HOME_DEFAULTS.highlights.items.map((item) => ({ ...item })) },
      portfolio: HOME_DEFAULTS.portfolio,
      cta: { ...HOME_DEFAULTS.cta, image: photos.rollerClose },
    },
  });

  await payload.updateGlobal({
    slug: "page-content",
    context: context(),
    data: {
      ...PAGE_DEFAULTS,
      services: { ...PAGE_DEFAULTS.services, processSteps: PAGE_DEFAULTS.services.processSteps.map((step) => ({ ...step })) },
      cta: { ...PAGE_DEFAULTS.cta, image: photos.overlay },
    },
  });
  payload.logger.info("globals: site-settings, home-page, page-content");

  for (const service of SERVICES) {
    const exists = await payload.count({ collection: "services", where: { title: { equals: service.title } } });
    if (exists.totalDocs) continue;
    await payload.create({
      collection: "services",
      context: context(),
      data: {
        title: service.title,
        summary: service.summary,
        image: photos[service.photo],
        benefits: service.benefits.map((text) => ({ text })),
        idealFor: service.idealFor,
        price: { amount: service.amount, unit: "m2" },
        _status: "published",
      },
    });
    payload.logger.info(`service: ${service.title}`);
  }

  const legal = [
    { page: "privacy-policy", title: "Kebijakan *privasi.*", sections: PRIVACY_SECTIONS },
    { page: "terms-of-service", title: "Syarat & *ketentuan.*", sections: TERMS_SECTIONS },
  ] as const;
  for (const item of legal) {
    const exists = await payload.count({ collection: "legal-pages", where: { page: { equals: item.page } } });
    if (exists.totalDocs) continue;
    await payload.create({
      collection: "legal-pages",
      context: context(),
      data: { page: item.page, title: item.title, content: sectionsToLexical(item.sections), _status: "published" },
    });
    payload.logger.info(`legal page: ${item.page}`);
  }

  payload.logger.info("Seed complete.");
  process.exit(0);
}

await seed();
