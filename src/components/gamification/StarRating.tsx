import { Star } from "lucide-react";

interface StarRatingProps {
  score: number;
}

function getStarCount(score: number): number {
  if (score >= 100) return 3;
  if (score >= 80) return 2;
  return 1;
}

export function StarRating({ score }: StarRatingProps) {
  const earned = getStarCount(score);

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= earned ? "text-amber-400 fill-amber-400" : "text-zinc-300"
          }`}
        />
      ))}
    </div>
  );
}
