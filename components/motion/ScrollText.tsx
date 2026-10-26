"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span className="inline-block" style={{ opacity }}>
      {children}
    </motion.span>
  );
}

/** Paragraph that "ignites" word by word as it is scrolled through. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <p className={className} ref={ref}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <Word progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
            {word}
          </Word>{" "}
        </span>
      ))}
    </p>
  );
}
