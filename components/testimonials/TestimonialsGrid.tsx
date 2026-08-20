import { TESTIMONIALS } from "@/data/testimonials";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-24">
      <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
