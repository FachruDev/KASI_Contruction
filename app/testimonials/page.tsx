import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";
import { getSiteConfig, getTestimonials } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description:
    "Testimoni pelanggan KASI untuk layanan pengaspalan jalan, perumahan, area komersial, dan kebutuhan industri.",
};

export default async function TestimonialsPage() {
  const [testimonials, site] = await Promise.all([getTestimonials(), getSiteConfig()]);
  return (
    <>
      <PageHero
        description="Kepercayaan pelanggan adalah bagian penting dari pekerjaan kami. Ini pengalaman mereka setelah menggunakan layanan KASI di Jabodetabek."
        eyebrow="Testimoni"
        title="Kata mereka yang *sudah* merasakan."
      />
      <TestimonialsGrid testimonials={testimonials} />
      <CtaBand site={site} />
    </>
  );
}
