"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  /** Fraction of the frame height the image drifts while crossing the viewport. */
  speed?: number;
  preload?: boolean;
  /** CSS object-position, e.g. from the focal point chosen in the CMS. */
  position?: string;
};

export function ParallaxImage({ src, alt, sizes, className = "", speed = 0.12, preload, position }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div className={`overflow-hidden ${/\b(absolute|fixed)\b/.test(className) ? "" : "relative"} ${className}`} ref={ref}>
      <motion.div className="absolute inset-x-0 will-change-transform" style={{ y, top: `-${speed * 100}%`, bottom: `-${speed * 100}%` }}>
        <Image alt={alt} className="object-cover" fill preload={preload} sizes={sizes} src={src} style={position ? { objectPosition: position } : undefined} />
      </motion.div>
    </div>
  );
}
