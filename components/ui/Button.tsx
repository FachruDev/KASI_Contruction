import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export type ButtonVariant = "signal" | "ink" | "bone" | "ghost-light" | "ghost-dark";

const shell: Record<ButtonVariant, string> = {
  signal: "bg-signal text-ink hover:bg-signal-soft",
  ink: "bg-ink text-bone hover:bg-ink-raised",
  bone: "bg-bone text-ink hover:bg-white",
  "ghost-light": "bg-ink/[0.04] text-ink hairline hover:bg-ink/[0.07]",
  "ghost-dark": "bg-bone/[0.06] text-bone hairline-dark hover:bg-bone/[0.1] backdrop-blur-md",
};

const island: Record<ButtonVariant, string> = {
  signal: "bg-ink/10",
  ink: "bg-bone/10",
  bone: "bg-ink/[0.06]",
  "ghost-light": "bg-ink text-bone",
  "ghost-dark": "bg-bone text-ink",
};

export function buttonClasses(variant: ButtonVariant = "signal", className = "") {
  return `group inline-flex shrink-0 items-center text-left sm:whitespace-nowrap justify-between gap-4 rounded-full py-1.5 pr-1.5 pl-6 text-[15px] font-medium tracking-[-0.01em] transition-[background-color,transform] duration-500 ease-fluid active:scale-[0.98] ${shell[variant]} ${className}`;
}

export function ButtonIsland({ variant = "signal", children }: { variant?: ButtonVariant; children?: ReactNode }) {
  return (
    <span className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105 ${island[variant]}`}>
      {children ?? <ArrowUpRightIcon size={18} weight="light" />}
    </span>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
};

export function Button({ href, children, variant = "signal", icon, className }: ButtonProps) {
  const external = /^https?:\/\//.test(href);
  return (
    <Link className={buttonClasses(variant, className)} href={href} rel={external ? "noopener noreferrer" : undefined} target={external ? "_blank" : undefined}>
      <span>{children}</span>
      <ButtonIsland variant={variant}>{icon}</ButtonIsland>
    </Link>
  );
}
