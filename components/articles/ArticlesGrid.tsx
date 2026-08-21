import { ArticleCard } from "./ArticleCard";
import { ARTICLE_CARDS } from "@/data/articles";

export function ArticlesGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {ARTICLE_CARDS.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}
