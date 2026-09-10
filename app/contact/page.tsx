import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getSiteConfig } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Kontak KASI",
  description:
    "Hubungi KASI untuk konsultasi jasa pengaspalan jalan, perumahan, area komersial, dan industri di Jabodetabek.",
};

export default async function ContactPage() {
  const site = await getSiteConfig();
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background">
      <Navbar active="contact" />
      <ContactContent site={site} />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
