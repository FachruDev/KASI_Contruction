"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { EASE_CINE, EASE_FLUID } from "@/components/motion/SmoothScroll";
import { buttonClasses, ButtonIsland } from "@/components/ui/Button";
import type { PortfolioProject } from "@/data/portfolio";
import type { PortfolioCategory } from "@/lib/cms";

const PAGE_SIZE = 6;
// Repeating rhythm of column spans keeps the grid asymmetric without ever leaving holes.
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export function PortfolioGallery({ projects, categories }: { projects: readonly PortfolioProject[]; categories: readonly PortfolioCategory[] }) {
  const [selected, setSelected] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const filtered = useMemo(() => (selected === "all" ? projects : projects.filter((project) => project.categorySlugs?.includes(selected))), [projects, selected]);
  const visible = filtered.slice(0, visibleCount);
  const filters = [{ title: "Semua", slug: "all" }, ...categories];

  const select = (slug: string) => {
    setSelected(slug);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="mx-auto max-w-[88rem] px-4 pb-28 md:px-10 md:pb-40">
      <div className="no-scrollbar -mx-4 mb-14 flex gap-2 overflow-x-auto px-4 md:mx-0 md:mb-20 md:flex-wrap md:px-0" data-lenis-prevent-horizontal role="tablist">
        {filters.map((filter) => {
          const active = selected === filter.slug;
          const count = filter.slug === "all" ? projects.length : projects.filter((project) => project.categorySlugs?.includes(filter.slug)).length;
          return (
            <button
              aria-selected={active}
              className={`relative shrink-0 rounded-full px-5 py-2.5 text-[14px] transition-colors duration-500 ease-fluid ${active ? "text-bone" : "text-ink/60 hairline hover:text-ink"}`}
              key={filter.slug}
              onClick={() => select(filter.slug)}
              role="tab"
              type="button"
            >
              {active ? <motion.span className="absolute inset-0 rounded-full bg-ink" layoutId="portfolio-filter" transition={{ duration: 0.6, ease: EASE_FLUID }} /> : null}
              <span className="relative">
                {filter.title} <span className={`font-mono text-[11px] ${active ? "text-bone/50" : "text-ink/35"}`}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      {visible.length ? (
        <motion.div className="grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-12 md:gap-y-20" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className={SPANS[index % SPANS.length]}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 60 }}
                key={project.slug ?? project.title}
                layout
                transition={{ duration: 0.9, delay: (index % PAGE_SIZE) * 0.06, ease: EASE_CINE }}
              >
                <ProjectCard project={project} tall={index % 4 === 0 || index % 4 === 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="rounded-[2rem] bg-ink/[0.035] p-12 text-center text-ink/55 hairline">Belum ada portfolio pada kategori ini.</p>
      )}

      {visibleCount < filtered.length ? (
        <div className="mt-20 flex justify-center">
          <button className={buttonClasses("ghost-light")} onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} type="button">
            Muat lebih banyak
            <ButtonIsland variant="ghost-light" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
