"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";

export const EASE_CINE = [0.16, 1, 0.3, 1] as const;
export const EASE_FLUID = [0.32, 0.72, 0, 1] as const;

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE_CINE }}>
      <ReactLenis root options={{ lerp: 0.085, anchors: { offset: -96 }, stopInertiaOnNavigate: true }}>
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
