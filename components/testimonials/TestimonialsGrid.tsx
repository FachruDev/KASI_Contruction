import { TestimonialCard } from "./TestimonialCard";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialsGrid({ testimonials }: { testimonials: readonly Testimonial[] }) {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-24">
      <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
