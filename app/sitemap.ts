import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.8 },
  { path: "/testimonials", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.6 },
  {
    path: "/articles/the-importance-of-proper-asphalt-drainage",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
