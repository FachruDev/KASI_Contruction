import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function TestimonialRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="mb-4 flex space-x-1 text-tertiary" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }, (_, index) => (
        <MaterialIcon key={`star-${index}`} filled>
          star
        </MaterialIcon>
      ))}
      {hasHalfStar ? <MaterialIcon filled>star_half</MaterialIcon> : null}
    </div>
  );
}
