import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";
import { TestimonialsHero } from "@/components/testimonials/TestimonialsHero";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function TestimonialsPage() {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar active="testimonials" variant="testimonials" />

      <main className="w-full">
        <TestimonialsHero />
        <TestimonialsGrid />
      </main>

      <Footer variant="testimonials" />
      <WhatsAppFab variant="testimonials" />
    </div>
  );
}
