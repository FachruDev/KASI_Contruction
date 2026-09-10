import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PortfolioCta } from "@/components/portfolio/PortfolioCta";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getPortfolio } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Portfolio Proyek Pengaspalan Jabodetabek",
  description:
    "Lihat portfolio proyek pengaspalan KASI untuk kebutuhan jalan, perumahan, komersial, dan industri di wilayah Jabodetabek.",
};

export default async function PortfolioPage() {
  const portfolio = await getPortfolio();
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar active="portfolio" />

      <main className="flex-grow">
        <PortfolioHero filters={portfolio.filters} />
        <PortfolioGallery projects={portfolio.projects} />
        <PortfolioCta />
      </main>

      <WhatsAppFab />
      <Footer />
    </div>
  );
}
