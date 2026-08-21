import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { ServiceHeader } from "@/components/services/ServiceHeader";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServiceCta } from "@/components/services/ServiceCta";

export const metadata: Metadata = {
  title: "Our Services - Terra Paving",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased">
      <Navbar active="services" />

      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-16 sm:px-8">
        <ServiceHeader />
        <ServicesGrid />
        <ServiceCta />
      </main>

      <WhatsAppFab />
      <Footer />
    </div>
  );
}
