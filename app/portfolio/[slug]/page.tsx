import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/layout/CtaBand";
import { PortfolioDetail } from "@/components/portfolio/PortfolioDetail";
import { getPortfolioBySlug, getSiteConfig } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  return portfolio ? { title: portfolio.title, description: portfolio.subtitle || `Portfolio proyek ${portfolio.title}` } : {};
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const [portfolio, site] = await Promise.all([getPortfolioBySlug(slug), getSiteConfig()]);
  if (!portfolio) notFound();
  return (
    <>
      <PortfolioDetail portfolio={portfolio} />
      <CtaBand image={portfolio.afterImage ?? portfolio.coverImage} site={site} />
    </>
  );
}
