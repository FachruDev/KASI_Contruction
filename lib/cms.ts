import { cache } from "react";
import { SERVICES, type ServiceItem } from "@/data/services";
import { PORTFOLIO_FILTERS, PORTFOLIO_PROJECTS, type PortfolioProject } from "@/data/portfolio";
import { FAQ_SECTIONS, type FaqSection } from "@/data/faq";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { LANDING_HIGHLIGHTS, LANDING_IMAGES, LANDING_STATS } from "@/data/landing";

const POCKETBASE_URL = (process.env.POCKETBASE_URL ?? "https://kasiservices.ryucode.site").replace(/\/$/, "");
const REVALIDATE_SECONDS = 60;

type PocketBaseRecord = Record<string, unknown> & {
  id: string;
  collectionName: string;
  expand?: Record<string, PocketBaseRecord | PocketBaseRecord[]>;
};

type PocketBaseList<T> = { items: T[] };

async function listRecords<T extends PocketBaseRecord>(collection: string, query = "") {
  try {
    const response = await fetch(`${POCKETBASE_URL}/api/collections/${collection}/records?perPage=200${query}`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: [`pocketbase:${collection}`] },
    });

    if (!response.ok) {
      return [] as T[];
    }

    return (await response.json() as PocketBaseList<T>).items;
  } catch {
    return [] as T[];
  }
}

function firstRecord<T extends PocketBaseRecord>(records: T[]) {
  return records[0];
}

function text(record: PocketBaseRecord | undefined, field: string, fallback = "") {
  const value = record?.[field];
  return typeof value === "string" && value.trim() ? value : fallback;
}

function number(record: PocketBaseRecord | undefined, field: string, fallback = 0) {
  const value = record?.[field];
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function bool(record: PocketBaseRecord | undefined, field: string) {
  return record?.[field] === true;
}

function fileUrl(record: PocketBaseRecord | undefined, field: string, fallback?: string) {
  const filename = text(record, field);
  if (!record || !filename) return fallback;

  return `${POCKETBASE_URL}/api/files/${record.collectionName}/${record.id}/${encodeURIComponent(filename)}`;
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export type SiteConfig = {
  companyName: string;
  siteTitle: string;
  siteDescription: string;
  footerSubtitle: string;
  copyright: string;
  whatsappPhone: string;
  whatsappMessage: string;
  email: string;
  address: string;
  mapsEmbedUrl: string;
  businessHours: Array<{ dayLabel: string; openTime: string; closeTime: string }>;
};

const fallbackSiteConfig: SiteConfig = {
  companyName: "KASI",
  siteTitle: "KASI | Jasa Pengaspalan Profesional Jabodetabek",
  siteDescription: "Jasa pengaspalan profesional untuk jalan, perumahan, dan area usaha di Jabodetabek.",
  footerSubtitle: "Solusi pengaspalan yang rapi, kuat, dan dapat diandalkan.",
  copyright: "© 2026 KASI. All rights reserved.",
  whatsappPhone: "6282123927180",
  whatsappMessage: "Halo, saya ingin konsultasi terkait jasa pengaspalan. Mohon informasinya.",
  email: "customerservice@kasi.com",
  address: "Jl. H Appandi kp. Kaum Pandak RT 002/01, Kabupaten Bogor, Jawa Barat No. rumah 49, 16913",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115450.87145564539!2d106.815021!3d-6.5244088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa49178e0b914f503%3A0x7c84bd8b82250d61!2sJasa%20Pengaspalan%20Bogor!5e1!3m2!1sid!2sid!4v1787557793233!5m2!1sid!2sid",
  businessHours: [
    { dayLabel: "Senin - Jumat", openTime: "07:00", closeTime: "19:00" },
    { dayLabel: "Sabtu", openTime: "08:00", closeTime: "19:00" },
    { dayLabel: "Minggu", openTime: "Tutup", closeTime: "" },
  ],
};

export const getSiteConfig = cache(async (): Promise<SiteConfig> => {
  const [profiles, contacts, businessHours] = await Promise.all([
    listRecords<PocketBaseRecord>("site_profile"),
    listRecords<PocketBaseRecord>("contact_info"),
    listRecords<PocketBaseRecord>("business_hours", "&sort=sort_order"),
  ]);
  const profile = firstRecord(profiles);
  const contact = firstRecord(contacts);

  return {
    companyName: text(profile, "company_name", fallbackSiteConfig.companyName),
    siteTitle: text(profile, "site_title", fallbackSiteConfig.siteTitle),
    siteDescription: text(profile, "site_description", fallbackSiteConfig.siteDescription),
    footerSubtitle: text(profile, "footer_subtitle", fallbackSiteConfig.footerSubtitle),
    copyright: text(profile, "copyright", fallbackSiteConfig.copyright),
    whatsappPhone: text(contact, "whatsapp_phone", fallbackSiteConfig.whatsappPhone),
    whatsappMessage: text(contact, "whatsapp_message", fallbackSiteConfig.whatsappMessage),
    email: text(contact, "email", fallbackSiteConfig.email),
    address: text(contact, "address", fallbackSiteConfig.address),
    mapsEmbedUrl: text(contact, "maps_embed_url", fallbackSiteConfig.mapsEmbedUrl),
    businessHours: businessHours.length
      ? businessHours.map((item) => ({
          dayLabel: text(item, "day_label"),
          openTime: text(item, "open_time"),
          closeTime: text(item, "close_time"),
        }))
      : fallbackSiteConfig.businessHours,
  };
});

export type HomeData = {
  hero: { title: string; subtitle: string; image: string; imageAlt: string; ctaMessage: string };
  stats: Array<{ value: string; label: string }>;
  features: Array<{ icon: string; title: string; description: string }>;
  cta: { title: string; subtitle: string; ctaMessage: string };
};

export const getHomeData = cache(async (): Promise<HomeData> => {
  const [heroes, stats, features, ctas] = await Promise.all([
    listRecords<PocketBaseRecord>("home_hero"),
    listRecords<PocketBaseRecord>("home_stats", "&sort=sort_order"),
    listRecords<PocketBaseRecord>("home_features", "&sort=sort_order"),
    listRecords<PocketBaseRecord>("home_cta"),
  ]);
  const hero = firstRecord(heroes);
  const cta = firstRecord(ctas);

  return {
    hero: {
      title: text(hero, "title", "Jasa Pengaspalan Profesional Jabodetabek"),
      subtitle: text(hero, "subtitle", "Solusi pengaspalan untuk jalan lingkungan, perumahan, hingga kebutuhan industri. KASI - Kaum Aspal Solusi Indonesia hadir dengan pengerjaan yang rapi, material berkualitas, dan proses kerja yang dapat dipercaya."),
      image: fileUrl(hero, "image", LANDING_IMAGES.hero) ?? LANDING_IMAGES.hero,
      imageAlt: text(hero, "image_alt", "Pekerjaan pengaspalan KASI"),
      ctaMessage: text(hero, "cta_message", fallbackSiteConfig.whatsappMessage),
    },
    stats: stats.length ? stats.map((item) => ({ value: text(item, "value"), label: text(item, "label") })) : [...LANDING_STATS],
    features: features.length
      ? features.map((item) => ({ icon: text(item, "icon", "verified"), title: text(item, "title"), description: text(item, "description") }))
      : Object.values(LANDING_HIGHLIGHTS).map((item) => ({ ...item })),
    cta: {
      title: text(cta, "title", "Siap Mulai Proyek Pengaspalan Anda?"),
      subtitle: text(cta, "subtitle", "Ceritakan kebutuhan pengaspalan Anda kepada kami. Tim KASI siap membantu memberikan konsultasi yang sesuai dengan kebutuhan proyek Anda."),
      ctaMessage: text(cta, "cta_message", fallbackSiteConfig.whatsappMessage),
    },
  };
});

export const getServices = cache(async (): Promise<readonly ServiceItem[]> => {
  const [services, benefits] = await Promise.all([
    listRecords<PocketBaseRecord>("services", "&sort=sort_order"),
    listRecords<PocketBaseRecord>("service_benefits", "&sort=sort_order"),
  ]);

  if (!services.length) return SERVICES;

  return services.map((service) => ({
    title: text(service, "title"),
    description: text(service, "description"),
    image: fileUrl(service, "image") ?? "/assets/images/services/services1.jpeg",
    imageAlt: text(service, "image_alt", text(service, "title")),
    benefits: benefits.filter((benefit) => benefit.service === service.id).map((benefit) => text(benefit, "title")),
    idealFor: text(service, "ideal_for"),
    price: formatRupiah(number(service, "price")),
  }));
});

export const getPortfolio = cache(async (): Promise<{ filters: readonly string[]; projects: readonly PortfolioProject[] }> => {
  const [categories, portfolios] = await Promise.all([
    listRecords<PocketBaseRecord>("portfolio_categories", "&sort=sort_order"),
    listRecords<PocketBaseRecord>("portfolios", "&sort=sort_order&expand=category"),
  ]);

  if (!portfolios.length) return { filters: PORTFOLIO_FILTERS, projects: PORTFOLIO_PROJECTS };

  return {
    filters: ["Semua", ...categories.map((category) => text(category, "title"))],
    projects: portfolios.map((portfolio, index) => {
      const category = portfolio.expand?.category;
      const categoryRecord = Array.isArray(category) ? category[0] : category;
      const area = number(portfolio, "area_m2");
      const year = number(portfolio, "year");

      return {
        title: text(portfolio, "title"),
        description: stripHtml(text(portfolio, "description", text(portfolio, "subtitle"))),
        image: fileUrl(portfolio, "cover_image") ?? "/assets/images/landing/landing2.jpeg",
        imageAlt: text(portfolio, "cover_image_alt", text(portfolio, "title")),
        categories: [text(categoryRecord, "title", "Portfolio")],
        location: text(portfolio, "location"),
        area: area ? `${area.toLocaleString("id-ID")} m²` : undefined,
        year: year ? String(year) : undefined,
        beforeAfter: Boolean(text(portfolio, "before_image") && text(portfolio, "after_image")),
        featured: bool(portfolio, "is_featured") && index === 0 ? "primary" : undefined,
        meta: [area ? `${area.toLocaleString("id-ID")} m²` : "", year ? String(year) : ""].filter(Boolean).join(" • "),
      };
    }),
  };
});

export const getFaqSections = cache(async (): Promise<FaqSection[]> => {
  const [categories, faqs] = await Promise.all([
    listRecords<PocketBaseRecord>("faq_categories", "&sort=sort_order"),
    listRecords<PocketBaseRecord>("faqs", "&sort=sort_order&expand=category"),
  ]);
  if (!categories.length || !faqs.length) return FAQ_SECTIONS;

  return categories.map((category) => ({
    title: text(category, "title"),
    items: faqs
      .filter((faq) => faq.category === category.id)
      .map((faq) => ({ question: text(faq, "title"), answer: stripHtml(text(faq, "description")) })),
  })).filter((section) => section.items.length);
});

export const getTestimonials = cache(async (): Promise<readonly Testimonial[]> => {
  const testimonials = await listRecords<PocketBaseRecord>("testimonials", "&sort=sort_order");
  if (!testimonials.length) return TESTIMONIALS;

  return testimonials.map((testimonial) => ({
    name: text(testimonial, "name"),
    service: text(testimonial, "service_label", text(testimonial, "company_name")),
    rating: Number(text(testimonial, "rating", "5")),
    quote: text(testimonial, "message"),
    avatar: fileUrl(testimonial, "profile_image")
      ? { src: fileUrl(testimonial, "profile_image")!, alt: text(testimonial, "name") }
      : undefined,
    initials: text(testimonial, "name").split(" ").map((part) => part[0]).join("").slice(0, 2),
    projectImage: fileUrl(testimonial, "testimonial_image")
      ? { src: fileUrl(testimonial, "testimonial_image")!, alt: `Testimoni ${text(testimonial, "name")}` }
      : undefined,
  }));
});

export function createWhatsAppUrl(phone: string, message: string) {
  const normalizedPhone = phone.replace(/\D/g, "").replace(/^0/, "62");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
