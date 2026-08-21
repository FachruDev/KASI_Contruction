import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { ArticleCard as ArticleCardData } from "@/data/articles";

const badgeClasses = {
  primary: "bg-primary-container/20 text-primary",
  tertiary: "bg-tertiary-container/20 text-tertiary",
  secondary: "bg-secondary-container/50 text-secondary",
} as const;

export function ArticleCard({ article }: { article: ArticleCardData }) {
  const isWide = article.layout === "wide";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-300 hover:shadow-[0_4px_20px_rgba(46,50,48,0.06)] ${isWide ? "lg:col-span-2 lg:flex-row" : ""}`}
    >
      <div
        className={`relative flex h-56 items-center justify-center overflow-hidden ${isWide ? "lg:h-auto lg:w-1/2" : ""} ${article.icon ? "bg-surface-container-high" : ""}`}
      >
        {article.image ? (
          <img
            alt={article.imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src={article.image}
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(#705c30 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <MaterialIcon className="relative z-10 text-6xl text-primary opacity-50">
              {article.icon ?? "article"}
            </MaterialIcon>
          </>
        )}
      </div>

      <div className={`flex flex-grow flex-col p-8 ${isWide ? "justify-center lg:w-1/2" : ""}`}>
        <span className={`mb-4 inline-block self-start rounded-full px-3 py-1 font-label text-xs tracking-widest uppercase ${badgeClasses[article.tone]}`}>
          {article.category}
        </span>
        <h3 className={`mb-3 font-headline font-bold text-on-surface transition-colors group-hover:text-primary ${isWide ? "text-2xl" : "text-xl"}`}>
          {article.title}
        </h3>
        <p className={`mb-6 font-body leading-relaxed text-on-surface-variant ${isWide ? "" : "line-clamp-3 flex-grow"}`}>
          {article.description}
        </p>
        <Link
          className={`inline-flex items-center font-bold text-primary transition-colors hover:text-on-primary-fixed-variant ${isWide ? "" : "mt-auto"}`}
          href={article.href}
        >
          Read More
          <MaterialIcon className="ml-1 text-sm">east</MaterialIcon>
        </Link>
      </div>
    </article>
  );
}
