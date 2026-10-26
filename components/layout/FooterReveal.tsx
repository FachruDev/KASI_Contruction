"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Footer content drifts up from beneath the page as the last section scrolls away. */
export function FooterReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-28%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.2, 1]);

  return (
    <div className="relative overflow-hidden bg-ink" ref={ref}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
}
