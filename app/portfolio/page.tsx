import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PortfolioCta } from "@/components/portfolio/PortfolioCta";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Portfolio - Terra Paving",
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar active="portfolio" />

      <main className="flex-grow">
        <PortfolioHero />
        <PortfolioGallery />
        <PortfolioCta />
      </main>

      <WhatsAppFab />
      <Footer />
    </div>
  );
}
