import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import type { HomeData } from "@/lib/cms";

export function StatsSection({ stats }: { stats: HomeData["stats"] }) {
  return (
    <section className="bg-ink px-4 pt-28 pb-10 text-bone md:px-10 md:pt-40">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 border-t border-bone/10 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal
            className={`flex flex-col justify-between gap-10 py-10 md:min-h-[22rem] md:px-8 md:py-12 ${index ? "border-t border-bone/10 md:border-t-0 md:border-l" : "md:pl-0"}`}
            delay={index * 0.12}
            key={stat.label}
          >
            <span className="font-mono text-[10px] tracking-[0.22em] text-bone/40 uppercase">0{index + 1}</span>
            <div>
              <CountUp className="block text-[clamp(4.5rem,10vw,9.5rem)] leading-[0.85] font-medium tracking-[-0.06em]" value={stat.value} />
              <p className="mt-5 text-lg text-bone/60">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
