"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import type { PortfolioProject } from "@/data/portfolio";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import type { PortfolioCategory } from "@/lib/cms";

const PAGE_SIZE = 5;

export function PortfolioGallery({ projects, categories }: { projects: readonly PortfolioProject[]; categories: readonly PortfolioCategory[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const filteredProjects = useMemo(() => selectedCategory === "all" ? projects : projects.filter((project) => project.categorySlugs?.includes(selectedCategory)), [projects, selectedCategory]);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <PortfolioHero categories={categories} selectedCategory={selectedCategory} onSelect={selectCategory} />
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        {visibleProjects.length ? <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => <ProjectCard key={project.slug ?? project.title} project={project} />)}
        </div> : <p className="rounded-xl bg-surface-container-low p-8 text-center text-on-surface-variant">Belum ada portfolio pada kategori ini.</p>}

        {filteredProjects.length > PAGE_SIZE && visibleCount < filteredProjects.length ? <div className="mt-12 text-center">
          <button className="rounded-full border-2 border-primary bg-transparent px-8 py-3 font-bold text-primary transition-colors duration-200 hover:bg-primary-container/20" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} type="button">Muat lebih banyak</button>
        </div> : null}
      </section>
    </>
  );
}
