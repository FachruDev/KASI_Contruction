import type { Metadata } from "next";
import { FaqContent } from "@/components/faq/FaqContent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "FAQ Jasa Pengaspalan",
  description:
    "Pertanyaan umum seputar jasa pengaspalan KASI, proses pekerjaan, konsultasi, dan layanan pengaspalan di Jabodetabek.",
};

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased">
      <Navbar active="faq" />
      <FaqContent />
      <WhatsAppFab />
      <Footer />
    </div>
  );
}
