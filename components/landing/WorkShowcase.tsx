"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { useMediaQuery } from "@/components/motion/useMediaQuery";
import type { PortfolioProject } from "@/data/portfolio";

function WorkCard({ project, tall }: { project: PortfolioProject; tall?: boolean }) {
  return (
    <Link className="group block" href={project.slug ? `/portfolio/${project.slug}` : "/portfolio"}>
      <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
        <div className={`relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-bone-deep ${tall ? "aspect-[4/5]" : "aspect-[5/4]"}`}>
          <Image
            alt={project.imageAlt}
            className="object-cover transition-transform duration-[1.4s] ease-fluid group-hover:scale-[1.05]"
            fill
            sizes="(min-width: 768px) 44vw, 100vw"
            src={project.image}
          />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-6 px-2">
        <div>
          <p className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">{project.categories.join(" · ")}</p>
          <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em] transition-colors duration-500 group-hover:text-signal-deep">{project.title}</h3>
        </div>
        {project.meta || project.year ? <p className="shrink-0 pt-6 font-mono text-[11px] text-ink/45">{project.meta || project.year}</p> : null}
      </div>
    </Link>
  );
}

export function WorkShowcase({ projects }: { projects: readonly PortfolioProject[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const wide = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const picks = projects.slice(0, 4);
  const left = picks.filter((_, index) => index % 2 === 0);
  const right = picks.filter((_, index) => index % 2 === 1);

  return (
    <section className="mx-auto max-w-[88rem] px-4 pb-28 md:px-10 md:pb-44">
      <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal y={20}>
            <Eyebrow>Portfolio</Eyebrow>
          </Reveal>
          <RevealHeading className="mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.92] font-medium tracking-[-0.055em]" text="Hasil kerja yang *bicara* sendiri." />
        </div>
        <Reveal delay={0.2} y={20}>
          <Button href="/portfolio" variant="ghost-light">
            Lihat semua proyek
          </Button>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8" ref={ref}>
        <div className="space-y-14 md:space-y-24">
          {left.map((project, index) => (
            <Reveal key={project.slug ?? project.title}>
              <WorkCard project={project} tall={index % 2 === 0} />
            </Reveal>
          ))}
        </div>
        <motion.div className="space-y-14 md:mt-40 md:space-y-24" style={{ y: wide ? drift : 0 }}>
          {right.map((project, index) => (
            <Reveal delay={0.1} key={project.slug ?? project.title}>
              <WorkCard project={project} tall={index % 2 === 1} />
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
