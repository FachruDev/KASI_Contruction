import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CmsArticleDetail } from "@/components/articles/CmsArticleDetail";
import { CtaBand } from "@/components/layout/CtaBand";
import { getArticleBySlug, getSiteConfig } from "@/lib/cms";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return article ? { title: article.title, description: article.excerpt || undefined, openGraph: article.image ? { images: [article.image] } : undefined } : {};
}

export default async function CmsArticlePage({ params }: Props) {
  const { slug } = await params;
  const [article, site] = await Promise.all([getArticleBySlug(slug), getSiteConfig()]);
  if (!article) notFound();
  return (
    <>
      <CmsArticleDetail article={article} />
      <CtaBand site={site} title="Butuh jalan yang *awet?*" />
    </>
  );
}
