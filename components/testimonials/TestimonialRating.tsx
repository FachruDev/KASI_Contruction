import { StarHalfIcon, StarIcon } from "@phosphor-icons/react/ssr";

export function TestimonialRating({ rating, className = "" }: { rating: number; className?: string }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div aria-label={`${rating} dari 5 bintang`} className={`flex gap-0.5 text-signal ${className}`} role="img">
      {Array.from({ length: fullStars }, (_, index) => (
        <StarIcon aria-hidden="true" key={index} size={16} weight="fill" />
      ))}
      {hasHalfStar ? <StarHalfIcon aria-hidden="true" size={16} weight="fill" /> : null}
    </div>
  );
}
