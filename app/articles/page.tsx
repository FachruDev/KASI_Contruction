import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticlesHeader } from "@/components/articles/ArticlesHeader";
import { FeaturedArticle } from "@/components/articles/FeaturedArticle";
import { ArticlesGrid } from "@/components/articles/ArticlesGrid";
import { LoadMoreArticles } from "@/components/articles/LoadMoreArticles";

export default function ArticlesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Navbar variant="articles" />
      <main className="mx-auto max-w-7xl px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <ArticlesHeader />
        <FeaturedArticle />
        <ArticlesGrid />
        <LoadMoreArticles />
      </main>
      <Footer variant="articles" />
    </div>
  );
}
