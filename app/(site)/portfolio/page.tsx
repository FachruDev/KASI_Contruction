import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { getPageContent, getPortfolio, getSiteConfig } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Portfolio Proyek Pengaspalan Jabodetabek",
  description:
    "Lihat portfolio proyek pengaspalan KASI untuk kebutuhan jalan, perumahan, komersial, dan industri di wilayah Jabodetabek.",
};

export default async function PortfolioPage() {
  const [portfolio, site, pages] = await Promise.all([getPortfolio(), getSiteConfig(), getPageContent()]);
  return (
    <>
      <PageHero description={pages.portfolio.description} eyebrow={pages.portfolio.eyebrow} title={pages.portfolio.title} />
      <PortfolioGallery categories={portfolio.categories} projects={portfolio.projects} />
      <CtaBand cta={pages.cta} site={site} />
    </>
  );
}
