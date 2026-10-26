import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { RevealHeading } from "@/components/motion/RevealHeading";

type CoverHeroProps = {
  image?: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  back: { href: string; label: string };
  children?: ReactNode;
};

/** Full-bleed photographic opener for detail pages; falls back to a solid ink field without a cover. */
export function CoverHero({ image, imageAlt, eyebrow, title, back, children }: CoverHeroProps) {
  return (
    <section className="relative isolate flex min-h-[92dvh] flex-col justify-end overflow-hidden bg-ink text-bone">
      {image ? <ParallaxImage alt={imageAlt} className="absolute inset-0 -z-10" preload sizes="100vw" speed={0.2} src={image} /> : null}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/45 to-ink/30" />

      <div className="mx-auto w-full max-w-[88rem] px-4 pt-36 pb-12 md:px-10 md:pb-16">
        <Reveal y={16}>
          <Link className="group mb-10 inline-flex items-center gap-2 text-[14px] text-bone/70 transition-colors hover:text-bone" href={back.href}>
            <ArrowLeftIcon className="transition-transform duration-500 ease-fluid group-hover:-translate-x-1" size={16} weight="light" />
            {back.label}
          </Link>
        </Reveal>
        <Reveal y={16}>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        </Reveal>
        <RevealHeading as="h1" className="mt-7 max-w-6xl text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.92] font-medium tracking-[-0.055em]" delay={0.2} text={title} trigger="mount" />
        {children}
      </div>
    </section>
  );
}
