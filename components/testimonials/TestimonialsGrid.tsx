import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { TestimonialRating } from "@/components/testimonials/TestimonialRating";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollText } from "@/components/motion/ScrollText";

export function TestimonialsGrid({ testimonials }: { testimonials: readonly Testimonial[] }) {
  const [featured, ...rest] = testimonials;
  if (!featured) return null;

  return (
    <>
      <section className="bg-ink px-4 py-28 text-bone md:px-10 md:py-44">
        <div className="mx-auto max-w-[88rem]">
          <TestimonialRating rating={featured.rating} />
          <ScrollText
            className="serif-accent mt-10 max-w-6xl text-[clamp(2rem,4.6vw,4.5rem)] leading-[1.08]"
            text={`“${featured.quote}”`}
          />
          <Reveal className="mt-12 flex items-center gap-4" y={20}>
            <span aria-hidden="true" className="h-px w-12 bg-signal" />
            <p className="text-bone/80">
              {featured.name} <span className="text-bone/40">— {featured.service}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {rest.length ? (
        <section className="mx-auto max-w-[88rem] px-4 py-28 md:px-10 md:py-40">
          <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
            {rest.map((testimonial, index) => (
              <Reveal className="mb-5 break-inside-avoid" delay={(index % 3) * 0.08} key={`${testimonial.name}-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
