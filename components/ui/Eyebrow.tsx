import type { ReactNode } from "react";

/** Editorial section label: a short signal rule leading into plain sentence-case text. */
export function Eyebrow({ children, tone = "light", className = "" }: { children: ReactNode; tone?: "light" | "dark"; className?: string }) {
  const toneClass = tone === "dark" ? "text-bone/65" : "text-ink/55";
  return (
    <span className={`inline-flex items-center gap-3.5 text-[15px] font-medium tracking-[-0.015em] md:gap-4 md:text-[17px] ${toneClass} ${className}`}>
      <span aria-hidden="true" className="h-px w-10 bg-signal md:w-12" />
      {children}
    </span>
  );
}
