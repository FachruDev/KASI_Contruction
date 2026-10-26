import type { ReactNode } from "react";

/** Editorial section label: a short signal rule leading into plain sentence-case text. */
export function Eyebrow({ children, tone = "light", className = "" }: { children: ReactNode; tone?: "light" | "dark"; className?: string }) {
  const toneClass = tone === "dark" ? "text-bone/65" : "text-ink/55";
  return (
    <span className={`inline-flex items-center gap-3 text-[13px] font-medium tracking-[-0.01em] ${toneClass} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-signal" />
      {children}
    </span>
  );
}
