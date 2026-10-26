import type { ReactNode } from "react";

type BezelProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  innerClassName?: string;
};

/** Double-bezel enclosure: a hairline outer tray holding an inset core with concentric radii. */
export function Bezel({ children, tone = "light", className = "", innerClassName = "" }: BezelProps) {
  const outer = tone === "dark" ? "bg-bone/[0.04] hairline-dark" : "bg-ink/[0.035] hairline";
  const inner =
    tone === "dark"
      ? "bg-ink-soft shadow-[inset_0_1px_1px_rgba(242,238,231,0.08)]"
      : "bg-bone shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] ambient-shadow";

  return (
    <div className={`rounded-[2rem] p-1.5 ${outer} ${className}`}>
      <div className={`h-full overflow-hidden rounded-[calc(2rem-0.375rem)] ${inner} ${innerClassName}`}>{children}</div>
    </div>
  );
}
