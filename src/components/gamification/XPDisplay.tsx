import clsx from "clsx";
import { Zap } from "lucide-react";

import { calculateLevel, getXpForNextLevel } from "../../lib/xp";

interface XPDisplayProps {
  totalXp: number;
  todayXp?: number;
  showProgress?: boolean;
  size?: "sm" | "md" | "lg";
}

export function XPDisplay({ totalXp, todayXp, showProgress = false, size = "md" }: XPDisplayProps) {
  const level = calculateLevel(totalXp);
  const { current, needed, progress } = getXpForNextLevel(totalXp);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex flex-col">
      <div className={clsx("flex items-center gap-2", sizeClasses[size])}>
        <div
          className={clsx(
            "flex items-center gap-1",
            totalXp > 0 ? "text-secondary-500" : "text-zinc-400",
          )}
        >
          <Zap className={clsx(iconSizes[size], totalXp > 0 && "fill-secondary-500")} />
          <span className="font-bold tabular-nums">{totalXp}</span>
        </div>

        {todayXp !== undefined && todayXp > 0 && (
          <span className="text-zinc-400 text-xs">+{todayXp} today</span>
        )}
      </div>

      {showProgress && (
        <div className="mt-2 space-y-1">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>Level {level.level}</span>
            <span>
              {current}/{needed} XP
            </span>
          </div>
          <div className="h-2 bg-surface-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-secondary-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-zinc-400">{level.title}</p>
        </div>
      )}
    </div>
  );
}
