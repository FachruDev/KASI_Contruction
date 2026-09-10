import { Fragment } from "react";
import type { HomeData } from "@/lib/cms";

export function StatsSection({ stats }: { stats: HomeData["stats"] }) {
  return (
    <section className="bg-surface-container-low px-8 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-around gap-8 md:flex-row md:gap-16">
        {stats.map((stat, index) => (
          <Fragment key={stat.label}>
            <div className="space-y-2 text-center">
              <h3 className="font-headline text-4xl font-bold text-tertiary">{stat.value}</h3>
              <p className="font-body text-lg text-on-surface-variant">{stat.label}</p>
            </div>
            {index < stats.length - 1 ? (
              <div aria-hidden="true" className="hidden h-16 w-px bg-outline-variant/30 md:block" />
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
