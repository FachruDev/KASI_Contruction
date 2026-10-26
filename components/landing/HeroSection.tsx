"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { EASE_CINE } from "@/components/motion/SmoothScroll";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import type { HomeData, SiteConfig } from "@/lib/types";

type HeroProps = {
  hero: HomeData["hero"];
  site: SiteConfig;
  highlight?: { value: string; label: string };
};

export function HeroSection({ hero, site, highlight }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const shade = useTransform(scrollYProgress, [0, 0.7], [0, 0.75]);
  const copyY = useTransform(scrollYProgress, [0, 0.55], [0, -140]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  // Without an editor-chosen accent, set the closing word in the serif accent.
  const title = hero.title.includes("*") ? hero.title : hero.title.replace(/(\S+)$/, "*$1*");

  return (
    <section className="relative h-[175vh] bg-ink" ref={ref}>
      <div className="sticky top-0 h-[100dvh] overflow-hidden text-bone">
        <motion.div
          animate={{ clipPath: "inset(0% 0% 0% 0% round 0rem)" }}
          className="absolute inset-0"
          initial={{ clipPath: "inset(18% 12% 18% 12% round 2.5rem)" }}
          transition={{ duration: 1.8, ease: EASE_CINE }}
        >
          <motion.div className="absolute inset-0 will-change-transform" style={{ scale: imageScale, y: imageY }}>
            <motion.div animate={{ scale: 1 }} className="absolute inset-0" initial={{ scale: 1.35 }} transition={{ duration: 2.4, ease: EASE_CINE }}>
              <Image alt={hero.image.alt} className="object-cover" fill preload quality={85} sizes="100vw" src={hero.image.src} style={hero.image.position ? { objectPosition: hero.image.position } : undefined} />
            </motion.div>
          </motion.div>
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/10 to-ink/95" />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-ink/60 via-transparent to-transparent" />
          <motion.div aria-hidden="true" className="absolute inset-0 bg-ink" style={{ opacity: shade }} />
        </motion.div>

        <motion.div className="relative mx-auto flex h-full max-w-[88rem] flex-col justify-end px-4 pb-10 md:px-10 md:pb-14" style={{ y: copyY, opacity: copyOpacity }}>
          <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} transition={{ duration: 1, delay: 0.9, ease: EASE_CINE }}>
            <Eyebrow tone="dark">{hero.eyebrow || "Kaum Aspal Solusi Indonesia"}</Eyebrow>
          </motion.div>

          <RevealHeading
            as="h1"
            className="mt-7 max-w-6xl text-[clamp(3rem,8.2vw,9rem)] leading-[0.9] font-medium tracking-[-0.055em]"
            delay={0.75}
            text={title}
            trigger="mount"
          />

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid gap-8 border-t border-bone/15 pt-8 md:grid-cols-12 md:items-end"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 1.2, delay: 1.3, ease: EASE_CINE }}
          >
            <p className="max-w-xl text-base leading-relaxed text-bone/70 md:col-span-6 md:text-lg">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
              <Button href="/contact">{hero.ctaLabel}</Button>
              <Button href={createWhatsAppUrl(site.whatsappPhone, hero.whatsappMessage || site.whatsappMessage)} icon={<WhatsappLogoIcon size={18} weight="light" />} variant="ghost-dark">
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {highlight ? (
          <motion.div className="absolute top-32 right-10 hidden lg:block" style={{ opacity: copyOpacity }}>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="rounded-[1.5rem] bg-ink/40 p-1.5 backdrop-blur-xl hairline-dark"
              initial={{ opacity: 0, x: 24 }}
              transition={{ duration: 1.2, delay: 1.6, ease: EASE_CINE }}
            >
              <div className="rounded-[calc(1.5rem-0.375rem)] bg-bone/[0.04] px-6 py-5 shadow-[inset_0_1px_1px_rgba(242,238,231,0.1)]">
                <p className="text-4xl font-medium tracking-[-0.05em]">{highlight.value}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-bone/55 uppercase">{highlight.label}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
