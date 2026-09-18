import { ArticleCard } from "./ArticleCard";
import { ARTICLE_CARDS, type ArticleCard as ArticleCardData } from "@/data/articles";

export function ArticlesGrid({ articles = ARTICLE_CARDS }: { articles?: readonly ArticleCardData[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}
