import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";
import { getPageContent, getSiteConfig, getTestimonials } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description:
    "Testimoni pelanggan KASI untuk layanan pengaspalan jalan, perumahan, area komersial, dan kebutuhan industri.",
};

export default async function TestimonialsPage() {
  const [testimonials, site, pages] = await Promise.all([getTestimonials(), getSiteConfig(), getPageContent()]);
  const page = pages.testimonials;
  return (
    <>
      <PageHero description={page.description} eyebrow={page.eyebrow} title={page.title} />
      <TestimonialsGrid testimonials={testimonials} />
      <CtaBand cta={pages.cta} site={site} />
    </>
  );
}
