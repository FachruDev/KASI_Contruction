"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Reveal } from "@/components/motion/Reveal";
import { buttonClasses, ButtonIsland } from "@/components/ui/Button";
import type { ArticleSummary } from "@/lib/types";

const PAGE_SIZE = 6;

export function ArticlesGrid({ articles }: { articles: readonly ArticleSummary[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  return (
    <section className="mx-auto max-w-[88rem] px-4 pb-28 md:px-10 md:pb-40">
      <div className="grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, visibleCount).map((article, index) => (
          <Reveal className="h-full" delay={(index % 3) * 0.08} key={article.slug}>
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>

      {visibleCount < articles.length ? (
        <div className="mt-20 flex justify-center">
          <button className={buttonClasses("ghost-light")} onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} type="button">
            Muat artikel lainnya
            <ButtonIsland variant="ghost-light" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
