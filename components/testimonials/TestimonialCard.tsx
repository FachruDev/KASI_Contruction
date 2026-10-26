import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialRating } from "@/components/testimonials/TestimonialRating";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
      <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-bone shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] ambient-shadow">
        {testimonial.projectImage ? (
          <div className="relative aspect-[16/10] bg-bone-deep">
            <Image alt={testimonial.projectImage.alt} className="object-cover" fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" src={testimonial.projectImage.src} />
          </div>
        ) : null}
        <div className="p-7 md:p-8">
          <TestimonialRating rating={testimonial.rating} />
          <blockquote className="mt-6 text-[17px] leading-relaxed text-ink/80">&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
            {testimonial.avatar ? (
              <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-bone-deep">
                <Image alt={testimonial.avatar.alt} className="object-cover" fill sizes="44px" src={testimonial.avatar.src} />
              </span>
            ) : (
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[12px] text-bone">{testimonial.initials}</span>
            )}
            <div>
              <p className="font-medium tracking-[-0.02em]">{testimonial.name}</p>
              <p className="text-[13px] text-ink/50">{testimonial.service}</p>
            </div>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
