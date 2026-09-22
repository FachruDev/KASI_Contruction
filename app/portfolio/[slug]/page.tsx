import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PortfolioDetail } from "@/components/portfolio/PortfolioDetail";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getPortfolioBySlug } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  return portfolio ? { title: portfolio.title, description: portfolio.subtitle || `Portfolio proyek ${portfolio.title}` } : {};
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) notFound();
  return <div className="flex min-h-screen flex-col bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container"><Navbar active="portfolio" /><main className="mx-auto w-full max-w-7xl grow px-6 pt-10 pb-24 md:px-12"><PortfolioDetail portfolio={portfolio} /></main><WhatsAppFab /><Footer /></div>;
}
