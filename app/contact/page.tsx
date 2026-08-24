import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Kontak KASI",
  description:
    "Hubungi KASI untuk konsultasi jasa pengaspalan jalan, perumahan, area komersial, dan industri di Jabodetabek.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <Navbar active="contact" />
      <ContactContent />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
