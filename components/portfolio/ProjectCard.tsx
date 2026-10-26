import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { ProjectSummary } from "@/lib/types";

export function ProjectCard({ project, tall }: { project: ProjectSummary; tall?: boolean }) {
  const details = [project.location, project.area, project.year].filter(Boolean).join(" · ");

  return (
    <Link className="group block h-full" href={`/portfolio/${project.slug}`}>
      <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
        <div className={`relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-bone-deep ${tall ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/3]"}`}>
          <Image
            alt={project.image.alt}
            className="object-cover transition-transform duration-[1.4s] ease-fluid group-hover:scale-[1.05]"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            src={project.image.src}
            style={project.image.position ? { objectPosition: project.image.position } : undefined}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-700 ease-fluid group-hover:opacity-100" />
          <span className="absolute top-4 right-4 flex size-11 translate-y-2 items-center justify-center rounded-full bg-bone text-ink opacity-0 transition-all duration-700 ease-fluid group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRightIcon size={18} weight="light" />
          </span>
          {project.beforeAfter ? (
            <span className="absolute top-4 left-4 rounded-full bg-ink/60 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-bone uppercase backdrop-blur-md">
              Sebelum / sesudah
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-5 px-2">
        <p className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">{project.category.title}</p>
        <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em] transition-colors duration-500 group-hover:text-signal-deep">{project.title}</h3>
        {details ? <p className="mt-1 text-[14px] text-ink/50">{details}</p> : null}
      </div>
    </Link>
  );
}
