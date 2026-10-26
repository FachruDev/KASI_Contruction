import type { Article } from "@/payload-types";

/** View models the components render. lib/cms.ts maps Payload documents onto these shapes. */

export type Img = {
  src: string;
  alt: string;
  /** CSS object-position derived from the focal point picked in the admin. */
  position?: string;
};

/** Lexical editor state exactly as Payload stores it. */
export type RichTextData = Article["content"];

export type BusinessHour = { label: string; open: string; close: string; closed: boolean };

export type SiteConfig = {
  companyName: string;
  legalName: string;
  footerTagline: string;
  copyright: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: string;
  favicon?: string;
  whatsappPhone: string;
  whatsappMessage: string;
  email: string;
  address: string;
  mapsEmbedUrl: string;
  businessHours: BusinessHour[];
};

export type SectionHeading = { eyebrow: string; heading: string };
export type PageHeader = { eyebrow: string; title: string; description: string };

export type HomeData = {
  hero: { eyebrow: string; title: string; subtitle: string; image: Img; ctaLabel: string; whatsappMessage: string };
  stats: { value: string; label: string }[];
  about: { eyebrow: string; note: string; statement: string; primaryImage: Img; secondaryImage: Img; caption: string };
  services: SectionHeading;
  highlights: SectionHeading & { description: string; image: Img; imageCaption: string; items: { icon: string; title: string; description: string }[] };
  portfolio: SectionHeading;
  cta: CtaContent;
};

export type CtaContent = { title: string; subtitle: string; buttonLabel: string; whatsappMessage?: string; image: Img };

export type PageContent = {
  services: PageHeader & { priceNote: string; processEyebrow: string; processHeading: string; processSteps: { title: string; description: string }[] };
  portfolio: PageHeader;
  testimonials: PageHeader;
  articles: PageHeader;
  faq: PageHeader & { supportTitle: string; supportText: string };
  contact: PageHeader;
  cta: CtaContent;
};

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  image: Img;
  benefits: string[];
  idealFor: string;
  /** Formatted starting price, absent when the service is quoted per request. */
  price?: string;
  priceUnit?: string;
  featured: boolean;
};

export type Category = { title: string; slug: string };

export type ProjectSummary = {
  slug: string;
  title: string;
  summary: string;
  image: Img;
  category: Category;
  location?: string;
  area?: string;
  year?: string;
  beforeAfter: boolean;
};

export type ProjectDetail = ProjectSummary & {
  body: RichTextData | null;
  gallery: Img[];
  before?: Img;
  after?: Img;
};

export type Testimonial = {
  name: string;
  role: string;
  service: string;
  rating: number;
  quote: string;
  initials: string;
  avatar?: Img;
  projectImage?: Img;
};

export type FaqItem = { question: string; answer: string };
export type FaqSection = { title: string; items: FaqItem[] };

export type ArticleSummary = {
  slug: string;
  href: string;
  title: string;
  category: string;
  excerpt: string;
  image?: Img;
  publishedAt?: string;
};

export type ArticleDetail = ArticleSummary & { content: RichTextData };

export type LegalPage = { title: string; content: RichTextData };
