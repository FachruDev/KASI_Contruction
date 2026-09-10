import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";
import { TestimonialsHero } from "@/components/testimonials/TestimonialsHero";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getTestimonials } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Testimoni Pelanggan",
  description:
    "Testimoni pelanggan KASI untuk layanan pengaspalan jalan, perumahan, area komersial, dan kebutuhan industri.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar active="testimonials" />

      <main className="w-full">
        <TestimonialsHero />
        <TestimonialsGrid testimonials={testimonials} />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
