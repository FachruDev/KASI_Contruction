import type { MetadataRoute } from "next";
import { getContentSlugs } from "@/lib/cms";
import { SITE_URL } from "@/lib/seo";

const routes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/testimonials", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.2 },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const slugs = await getContentSlugs();

  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...slugs.portfolios.map((slug) => ({ url: `${SITE_URL}/portfolio/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...slugs.articles.map((slug) => ({ url: `${SITE_URL}/articles/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
