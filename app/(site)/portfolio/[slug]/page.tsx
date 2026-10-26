import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/layout/CtaBand";
import { PortfolioDetail } from "@/components/portfolio/PortfolioDetail";
import { getContentSlugs, getPageContent, getProjectBySlug, getSiteConfig } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { projects } = await getContentSlugs();
  return projects.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  return project ? { title: project.title, description: project.summary, openGraph: { images: [project.image.src] } } : {};
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const [project, site, pages] = await Promise.all([getProjectBySlug(slug), getSiteConfig(), getPageContent()]);
  if (!project) notFound();
  return (
    <>
      <PortfolioDetail portfolio={project} />
      <CtaBand cta={pages.cta} image={project.after ?? project.image} site={site} />
    </>
  );
}
