import type { Metadata } from "next";
import { FaqContent } from "@/components/faq/FaqContent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getFaqSections } from "@/lib/cms";

export const metadata: Metadata = {
  title: "FAQ Jasa Pengaspalan",
  description:
    "Pertanyaan umum seputar jasa pengaspalan KASI, proses pekerjaan, konsultasi, dan layanan pengaspalan di Jabodetabek.",
};

export default async function FaqPage() {
  const sections = await getFaqSections();
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased">
      <Navbar active="faq" />
      <FaqContent sections={sections} />
      <WhatsAppFab />
      <Footer />
    </div>
  );
}
