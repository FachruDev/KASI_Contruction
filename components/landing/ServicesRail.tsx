"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { useMediaQuery } from "@/components/motion/useMediaQuery";
import type { SectionHeading, ServiceItem } from "@/lib/types";

function ServiceSlide({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <Link
      className="group block w-[82vw] shrink-0 snap-start rounded-[2rem] bg-bone/[0.04] p-1.5 hairline-dark sm:w-[60vw] lg:w-[min(36vw,34rem)]"
      href="/services"
    >
      <article className="relative flex h-[68vh] min-h-[30rem] flex-col justify-between overflow-hidden rounded-[calc(2rem-0.375rem)] bg-ink-soft p-7 shadow-[inset_0_1px_1px_rgba(242,238,231,0.08)] lg:h-[62vh]">
        <Image
          alt={service.image.alt}
          className="object-cover opacity-55 transition-[transform,opacity] duration-[1.4s] ease-fluid group-hover:scale-[1.06] group-hover:opacity-70"
          fill
          sizes="(min-width: 1024px) 36vw, 82vw"
          src={service.image.src}
          style={service.image.position ? { objectPosition: service.image.position } : undefined}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative flex items-start justify-between">
          <span className="font-mono text-[11px] tracking-[0.2em] text-bone/60">0{index + 1}</span>
          <span className="flex size-11 items-center justify-center rounded-full bg-bone/10 backdrop-blur-md transition-transform duration-500 ease-fluid group-hover:rotate-45 group-hover:bg-signal group-hover:text-ink">
            <ArrowUpRightIcon size={18} weight="light" />
          </span>
        </div>
        <div className="relative">
          <h3 className="text-[clamp(1.75rem,2.6vw,2.6rem)] leading-[1.02] font-medium tracking-[-0.045em]">{service.title}</h3>
          <p className="mt-4 line-clamp-3 max-w-md text-[15px] leading-relaxed text-bone/65">{service.summary}</p>
          <div className="mt-6 flex items-end justify-between border-t border-bone/15 pt-5">
            <p className="font-mono text-[10px] tracking-[0.2em] text-bone/45 uppercase">{service.price ? "Mulai dari" : "Harga"}</p>
            <p className="text-2xl font-medium tracking-[-0.04em]">
              {service.price ?? "Sesuai penawaran"}
              {service.priceUnit ? <span className="text-sm text-bone/50">{service.priceUnit}</span> : null}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

/** Pinned horizontal rail on desktop; a native snap carousel on touch screens. */
export function ServicesRail({ services, heading }: { services: readonly ServiceItem[]; heading: SectionHeading }) {
  const pinned = useMediaQuery("(min-width: 1024px)");
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!pinned || !track) return;
    const measure = () => setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 80));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const header = (
    <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-8 px-4 md:px-10 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <Eyebrow tone="dark">{heading.eyebrow}</Eyebrow>
        <RevealHeading className="mt-6 max-w-3xl text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.92] font-medium tracking-[-0.055em]" text={heading.heading} />
      </div>
      <Button className="self-start lg:self-auto" href="/services" variant="ghost-dark">
        Semua layanan
      </Button>
    </div>
  );

  const slides = services.map((service, index) => <ServiceSlide index={index} key={service.slug || service.title} service={service} />);

  if (!pinned) {
    return (
      <section className="relative bg-ink py-24 text-bone" ref={sectionRef}>
        {header}
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 md:scroll-px-10 md:px-10" data-lenis-prevent-horizontal>
          {slides}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-ink text-bone" ref={sectionRef} style={{ height: `${100 + services.length * 45}vh` }}>
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center gap-12 overflow-hidden pt-16">
        {header}
        <motion.div className="flex gap-5 pl-10 will-change-transform" ref={trackRef} style={{ x }}>
          {slides}
        </motion.div>
      </div>
    </section>
  );
}
