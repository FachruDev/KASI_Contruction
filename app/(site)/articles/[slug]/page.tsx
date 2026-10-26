import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsArticleDetail } from "@/components/articles/CmsArticleDetail";
import { CtaBand } from "@/components/layout/CtaBand";
import { getArticleBySlug, getContentSlugs, getPageContent, getSiteConfig } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { articles } = await getContentSlugs();
  return articles.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return article ? { title: article.title, description: article.excerpt, openGraph: article.image ? { images: [article.image.src] } : undefined } : {};
}

export default async function CmsArticlePage({ params }: Props) {
  const { slug } = await params;
  const [article, site, pages] = await Promise.all([getArticleBySlug(slug), getSiteConfig(), getPageContent()]);
  if (!article) notFound();
  return (
    <>
      <CmsArticleDetail article={article} />
      <CtaBand cta={pages.cta} site={site} />
    </>
  );
}
