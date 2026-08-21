import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function ArticleDetailCta() {
  return (
    <div className="group relative mt-20 flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container p-8 shadow-[0_4px_20px_rgba(46,50,48,0.06)] md:flex-row md:p-12">
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-fixed/30 blur-3xl transition-colors duration-700 group-hover:bg-primary-fixed/40" />
      <div className="relative z-10 md:max-w-[60%]">
        <h3 className="mb-4 font-headline text-3xl font-bold text-on-surface">Ready to lay a solid foundation?</h3>
        <p className="text-lg leading-relaxed text-on-surface-variant">
          Don&apos;t let poor drainage undermine your property&apos;s value. Our team designs paving solutions grounded in quality and engineered to last.
        </p>
      </div>
      <div className="relative z-10 w-full shrink-0 md:w-auto">
        <Link
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-on-primary shadow-xs transition-colors duration-200 hover:bg-primary-container hover:text-on-primary-container active:scale-95 md:w-auto"
          href="/contact"
        >
          Discuss Your Project
          <MaterialIcon className="text-[20px]">arrow_forward</MaterialIcon>
        </Link>
      </div>
    </div>
  );
}
