import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { PortfolioProject } from "@/data/portfolio";
import { ProjectTags } from "@/components/portfolio/ProjectTags";

const shadowClass = "shadow-[0_4px_20px_rgba(46,50,48,0.06)]";

export function ProjectCard({ project }: { project: PortfolioProject }) {
  if (project.featured === "primary") {
    return (
      <article
        className={`group col-span-1 flex flex-col overflow-hidden rounded-xl border border-surface-container-highest/50 bg-surface ${shadowClass} md:col-span-2 md:flex-row lg:col-span-2`}
      >
        <div className="relative h-72 overflow-hidden md:h-auto md:w-3/5">
          <img
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={project.image}
          />
          {project.beforeAfter ? (
            <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-tertiary-container px-3 py-1 text-xs font-bold text-on-tertiary-container shadow-xs">
              <MaterialIcon className="text-[16px]">flip_camera_android</MaterialIcon>
              Before &amp; After Available
            </div>
          ) : null}
        </div>

        <div className="flex flex-col justify-center p-8 md:w-2/5">
          <ProjectTags categories={project.categories} year={project.year} />
          <h2 className="mb-2 font-headline text-2xl font-bold text-on-background">{project.title}</h2>
          {project.location ? (
            <div className="mb-4 flex items-center gap-1 text-sm text-on-surface-variant">
              <MaterialIcon className="text-[16px]">location_on</MaterialIcon>
              {project.location}
            </div>
          ) : null}
          <p className="mb-6 flex-grow text-sm text-on-surface-variant">{project.description}</p>
          <div className="flex items-center justify-between border-t border-surface-container pt-4 text-sm font-semibold">
            <span className="text-on-surface">Area: {project.area}</span>
            {project.showDetails ? (
              <button
                className="flex items-center gap-1 text-primary transition-colors hover:text-primary-fixed-dim"
                type="button"
              >
                View Details
                <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
              </button>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  if (project.featured === "secondary") {
    return (
      <article
        className={`group col-span-1 flex flex-col overflow-hidden rounded-xl border border-surface-container-highest/50 bg-surface ${shadowClass} md:col-span-2 md:flex-row-reverse lg:col-span-2`}
      >
        <div className="relative h-64 overflow-hidden md:h-auto md:w-1/2">
          <img
            alt={project.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={project.image}
          />
        </div>
        <div className="flex flex-col justify-center bg-surface-container-low p-8 md:w-1/2">
          <ProjectTags categories={project.categories} />
          <h2 className="mb-2 font-headline text-2xl font-bold text-on-background">{project.title}</h2>
          {project.location ? (
            <div className="mb-4 flex items-center gap-1 text-sm text-on-surface-variant">
              <MaterialIcon className="text-[16px]">location_on</MaterialIcon>
              {project.location}
            </div>
          ) : null}
          <p className="mb-6 flex-grow text-sm text-on-surface-variant">{project.description}</p>
          <div className="flex items-center justify-between border-t border-surface-container pt-4 text-sm font-semibold">
            <span className="text-on-surface-variant">Area: {project.area}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-surface-container-highest/50 bg-surface ${shadowClass}`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={project.image}
        />
        {project.beforeAfter ? (
          <div
            className="absolute top-3 left-3 rounded-full bg-tertiary-container p-1.5 text-on-tertiary-container shadow-xs"
            title="Before/After Available"
          >
            <MaterialIcon className="block text-[16px]">flip_camera_android</MaterialIcon>
          </div>
        ) : null}
      </div>
      <div className="flex flex-grow flex-col p-6">
        <ProjectTags categories={project.categories} />
        <h3 className="mb-1 font-headline text-xl font-bold text-on-background">{project.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-on-surface-variant">{project.description}</p>
        <div className="mt-auto flex items-center justify-between border-t border-surface-container pt-4 text-sm">
          <span className="text-xs font-semibold text-on-surface-variant">{project.meta}</span>
        </div>
      </div>
    </article>
  );
}
