"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { VIEW_MARGIN } from "@/components/motion/Reveal";
import { EASE_CINE } from "@/components/motion/SmoothScroll";

type Word = { text: string; accent: boolean };

/** Splits "Jalan yang *bertahan lama*" into words; text between asterisks renders as the serif accent. */
function parseWords(text: string): Word[] {
  let accent = false;
  return text.split(/\s+/).filter(Boolean).map((raw) => {
    const opens = raw.startsWith("*");
    const closes = raw.endsWith("*") && (raw.length > 1 || !opens);
    if (opens) accent = true;
    const word = { text: raw.replace(/\*/g, ""), accent };
    if (closes) accent = false;
    return word;
  });
}

type RevealHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** "mount" animates on first paint (heroes); "view" waits for the viewport. */
  trigger?: "mount" | "view";
  delay?: number;
};

export function RevealHeading({ text, as = "h2", className, trigger = "view", delay = 0 }: RevealHeadingProps) {
  const Tag = motion[as];
  const words = parseWords(text);
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: VIEW_MARGIN });
  const shown = trigger === "mount" || inView;

  return (
    <Tag
      animate={shown ? "shown" : "hidden"}
      aria-label={text.replace(/\*/g, "")}
      className={className}
      initial="hidden"
      ref={ref}
      transition={{ staggerChildren: 0.055, delayChildren: delay }}
    >
      {words.map((word, index) => (
        <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" key={`${word.text}-${index}`}>
          <motion.span
            className={`inline-block will-change-transform ${word.accent ? "serif-accent pr-[0.06em]" : ""}`}
            transition={{ duration: 1.15, ease: EASE_CINE }}
            variants={{ hidden: { y: "110%", rotate: 4 }, shown: { y: "0%", rotate: 0 } }}
          >
            {word.text}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
