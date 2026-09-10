import { ProjectCard } from "@/components/portfolio/ProjectCard";
import type { PortfolioProject } from "@/data/portfolio";

export function PortfolioGallery({ projects }: { projects: readonly PortfolioProject[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <button
          className="rounded-full border-2 border-primary bg-transparent px-8 py-3 font-bold text-primary transition-colors duration-200 hover:bg-primary-container/20"
          type="button"
        >
          Muat lebih banyak
        </button>
      </div>
    </section>
  );
}
