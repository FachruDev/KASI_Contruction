import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CmsArticleDetail } from "@/components/articles/CmsArticleDetail";
import { getArticleBySlug } from "@/lib/cms";

export default async function CmsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();
  return <div className="flex min-h-screen flex-col font-body text-on-surface"><Navbar /><main className="mx-auto w-full max-w-4xl flex-grow px-6 pt-32 pb-24 selection:bg-primary-container selection:text-on-primary-container md:px-8"><CmsArticleDetail article={article} /></main><Footer /></div>;
}
