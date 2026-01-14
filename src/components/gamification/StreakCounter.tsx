import clsx from "clsx";
import { Flame } from "lucide-react";

interface StreakCounterProps {
  streak: number;
  isAtRisk?: boolean;
  size?: "sm" | "md" | "lg";
}

export function StreakCounter({ streak, isAtRisk = false, size = "md" }: StreakCounterProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div
      className={clsx(
        "flex items-center gap-1",
        sizeClasses[size],
        streak > 0 ? "text-streak-500" : "text-zinc-400",
      )}
    >
      <Flame
        className={clsx(
          iconSizes[size],
          streak > 0 && "fill-streak-500",
          isAtRisk && "text-streak-600",
        )}
      />
      <span className="font-bold tabular-nums">{streak}</span>
      {isAtRisk && streak > 0 && <span className="text-xs text-streak-600 ml-1">!</span>}
    </div>
  );
}
