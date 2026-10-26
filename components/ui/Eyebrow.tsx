import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "light", className = "" }: { children: ReactNode; tone?: "light" | "dark"; className?: string }) {
  const toneClass = tone === "dark" ? "bg-bone/[0.06] text-bone/70 hairline-dark" : "bg-ink/[0.04] text-ink/60 hairline";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] font-medium tracking-[0.22em] uppercase ${toneClass} ${className}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
      {children}
    </span>
  );
}
