"use client";

import { useState } from "react";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { FaqItem } from "@/data/faq";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-xl border border-surface-container-highest bg-surface-bright shadow-[0_4px_20px_rgba(46,50,48,0.06)]"
          >
            <button
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-surface-container-low focus:outline-none"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span className="pr-4 font-body text-lg font-bold text-on-background">
                {item.question}
              </span>
              <MaterialIcon
                className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              >
                expand_more
              </MaterialIcon>
            </button>

            <div
              className={`grid bg-surface-container-lowest transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pt-2 pb-5 font-body text-on-surface-variant">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
