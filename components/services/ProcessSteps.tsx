import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { RevealHeading } from "@/components/motion/RevealHeading";

type ProcessStepsProps = {
  eyebrow: string;
  heading: string;
  steps: { title: string; description: string }[];
};

export function ProcessSteps({ eyebrow, heading, steps }: ProcessStepsProps) {
  if (!steps.length) return null;
  return (
    <section className="bg-ink px-4 py-28 text-bone md:px-10 md:py-40">
      <div className="mx-auto max-w-[88rem]">
        <Reveal y={20}>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        </Reveal>
        <RevealHeading className="mt-6 max-w-4xl text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.92] font-medium tracking-[-0.055em]" text={heading} />
        <ol className={`mt-20 grid grid-cols-1 border-t border-bone/10 ${steps.length >= 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
          {steps.map((step, index) => (
            <li className={`py-10 md:px-7 md:py-12 ${index ? "border-t border-bone/10 md:border-t-0 md:border-l" : "md:pl-0"}`} key={step.title}>
              <Reveal delay={index * 0.1}>
                <span className="font-mono text-[11px] tracking-[0.22em] text-signal">0{index + 1}</span>
                <h3 className="mt-10 text-2xl font-medium tracking-[-0.035em] md:mt-24">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-bone/55">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
