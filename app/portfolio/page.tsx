import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { getPortfolio, getSiteConfig } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Portfolio Proyek Pengaspalan Jabodetabek",
  description:
    "Lihat portfolio proyek pengaspalan KASI untuk kebutuhan jalan, perumahan, komersial, dan industri di wilayah Jabodetabek.",
};

export default async function PortfolioPage() {
  const [portfolio, site] = await Promise.all([getPortfolio(), getSiteConfig()]);
  return (
    <>
      <PageHero
        description="Setiap proyek dikerjakan dengan memperhatikan kondisi lokasi, kebutuhan penggunaan, dan kualitas hasil akhir."
        eyebrow="Portfolio"
        title="Jalan yang sudah *kami* bangun."
      />
      <PortfolioGallery categories={portfolio.categories} projects={portfolio.projects} />
      <CtaBand site={site} />
    </>
  );
}
