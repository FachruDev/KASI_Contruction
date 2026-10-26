"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { EASE_CINE } from "@/components/motion/SmoothScroll";

export const VIEW_MARGIN = "0px 0px -10% 0px";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Heavy fade-up with a short blur, played once when the element enters the viewport.
 * Driven by useInView state rather than whileInView, which can miss the observer's first
 * report during hydration and leave above-the-fold content invisible.
 */
export function Reveal({ children, className, delay = 0, y = 56 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: VIEW_MARGIN });

  return (
    <motion.div
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      ref={ref}
      transition={{ duration: 1.1, delay, ease: EASE_CINE }}
    >
      {children}
    </motion.div>
  );
}
