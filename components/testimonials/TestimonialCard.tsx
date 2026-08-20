import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialRating } from "./TestimonialRating";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="mb-8 break-inside-avoid rounded-[12px] bg-surface-bright p-8 shadow-[0_4px_20px_rgba(46,50,48,0.06)]">
      <div className="mb-4 flex items-center space-x-4">
        {testimonial.avatar ? (
          <Image
            alt={testimonial.avatar.alt}
            className="h-16 w-16 rounded-full object-cover shadow-xs"
            height={64}
            src={testimonial.avatar.src}
            unoptimized
            width={64}
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-container font-headline text-2xl font-bold text-on-primary-container">
            {testimonial.initials}
          </div>
        )}

        <div>
          <h3 className="font-headline text-lg font-bold text-on-surface">{testimonial.name}</h3>
          <p className="text-sm text-tertiary">{testimonial.service}</p>
        </div>
      </div>

      <TestimonialRating rating={testimonial.rating} />

      <p className={`italic text-on-surface-variant ${testimonial.projectImage ? "mb-6" : ""}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {testimonial.projectImage ? (
        <Image
          alt={testimonial.projectImage.alt}
          className="h-48 w-full rounded-[8px] object-cover"
          height={192}
          src={testimonial.projectImage.src}
          unoptimized
          width={640}
        />
      ) : null}
    </article>
  );
}
