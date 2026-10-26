import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { RevealHeading } from "@/components/motion/RevealHeading";

type PageHeroProps = {
  eyebrow: string;
  /** Wrap words in *asterisks* to set them in the serif accent. */
  title: string;
  description?: string;
  aside?: ReactNode;
  children?: ReactNode;
};

/** Editorial split hero shared by the inner pages: massive title left, supporting copy right. */
export function PageHero({ eyebrow, title, description, aside, children }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-[88rem] px-4 pt-36 pb-16 md:px-10 md:pt-48 md:pb-24">
      <Reveal y={20}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <div className="mt-8 grid gap-10 md:grid-cols-12 md:items-end">
        <RevealHeading
          as="h1"
          className="text-[clamp(3rem,8.5vw,8.5rem)] leading-[0.9] font-medium tracking-[-0.055em] text-ink md:col-span-8"
          text={title}
          trigger="mount"
        />
        {description || aside ? (
          <Reveal className="space-y-6 md:col-span-4 md:pb-3" delay={0.35} y={32}>
            {description ? <p className="max-w-md text-lg leading-relaxed text-ink/60">{description}</p> : null}
            {aside}
          </Reveal>
        ) : null}
      </div>
      {children}
    </section>
  );
}
