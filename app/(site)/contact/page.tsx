import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { getPageContent, getSiteConfig } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Kontak KASI",
  description:
    "Hubungi KASI untuk konsultasi jasa pengaspalan jalan, perumahan, area komersial, dan industri di Jabodetabek.",
};

export default async function ContactPage() {
  const [site, pages] = await Promise.all([getSiteConfig(), getPageContent()]);
  return <ContactContent header={pages.contact} site={site} />;
}
