"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { useSiteConfig } from "@/components/cms/SiteConfigProvider";
import { EASE_FLUID } from "@/components/motion/SmoothScroll";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFab() {
  const site = useSiteConfig();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => setVisible(value > 480));

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          animate={{ opacity: 1, y: 0, scale: 1 }}
          aria-label="Konsultasi via WhatsApp"
          className="group fixed right-4 bottom-4 z-40 flex items-center gap-3 rounded-full bg-ink/80 py-1.5 pr-1.5 pl-5 text-[13px] text-bone shadow-[0_24px_60px_-20px_rgba(12,11,9,0.7)] backdrop-blur-xl hairline-dark md:right-8 md:bottom-8"
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          href={createWhatsAppUrl(site.whatsappPhone, site.whatsappMessage)}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          rel="noopener noreferrer"
          target="_blank"
          transition={{ duration: 0.6, ease: EASE_FLUID }}
        >
          <span className="hidden sm:inline">Tanya via WhatsApp</span>
          <span className="flex size-11 items-center justify-center rounded-full bg-signal text-ink transition-transform duration-500 ease-fluid group-hover:scale-105 group-hover:-rotate-6">
            <WhatsappLogoIcon size={20} weight="light" />
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
