"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

/** Counts the numeric part of values like "10+", "1k+" or "100%" up from zero once visible. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const match = value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  const target = match ? Number(match[2].replace(",", ".")) : 0;
  const hasNumber = Boolean(match);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!hasNumber || !inView || reduce) return;
    const controls = animate(0, target, { duration: 2.2, ease: [0.16, 1, 0.3, 1], onUpdate: setCurrent });
    return () => controls.stop();
  }, [hasNumber, inView, reduce, target]);

  if (!match) return <span className={className}>{value}</span>;

  const decimals = match[2].includes(".") || match[2].includes(",") ? 1 : 0;
  const shown = reduce || !inView ? (reduce ? target : 0) : current;

  return (
    <span aria-label={value} className={className} ref={ref}>
      <span aria-hidden="true">
        {match[1]}
        {shown.toFixed(decimals)}
        {match[3]}
      </span>
    </span>
  );
}
