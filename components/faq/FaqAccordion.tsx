"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_FLUID } from "@/components/motion/SmoothScroll";
import type { FaqItem } from "@/lib/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-t border-ink/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-${index}`;

        return (
          <div className="border-b border-ink/10" key={item.question}>
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-8 py-7 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span className={`text-[clamp(1.15rem,1.8vw,1.5rem)] leading-snug font-medium tracking-[-0.03em] transition-colors duration-500 ease-fluid ${isOpen ? "text-ink" : "text-ink/70 group-hover:text-ink"}`}>
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`relative mt-1 flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ease-fluid ${isOpen ? "bg-signal text-ink" : "bg-ink/[0.05] text-ink"}`}
              >
                <span className="absolute h-px w-3.5 bg-current" />
                <span className={`absolute h-3.5 w-px bg-current transition-transform duration-500 ease-fluid ${isOpen ? "scale-y-0" : ""}`} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                  exit={{ height: 0, opacity: 0 }}
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE_FLUID }}
                >
                  <p className="max-w-2xl pb-8 text-[16px] leading-relaxed text-ink/60">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
