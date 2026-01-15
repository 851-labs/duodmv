import clsx from "clsx";
import { Trophy, Star, Zap, Target } from "lucide-react";
import { useRef } from "react";

import { useHotkeyPress } from "../../lib/use-hotkey-press";

interface LessonCompleteProps {
  lessonTitle: string;
  accuracy: number;
  xpEarned: number;
  isPerfect: boolean;
  onContinue: () => void;
}

export function LessonComplete({
  lessonTitle,
  accuracy,
  xpEarned,
  isPerfect,
  onContinue,
}: LessonCompleteProps) {
  const continueButtonRef = useRef<HTMLButtonElement>(null);

  useHotkeyPress([{ keys: ["Enter"], ref: continueButtonRef, onTrigger: onContinue }]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-500 to-primary-600 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center">
        {/* Trophy icon */}
        <div className="mb-6">
          <div
            className={clsx(
              "inline-flex items-center justify-center w-24 h-24 rounded-full",
              "bg-white/20 backdrop-blur-sm",
              "animate-[bounce-in_0.5s_ease-out]",
            )}
          >
            <Trophy className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-2">
          {isPerfect ? "Perfect!" : "Lesson Complete!"}
        </h1>
        <p className="text-white/80 text-lg mb-8">{lessonTitle}</p>

        {/* Stats cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Accuracy */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 text-white" />
              <span className="text-white text-sm">Accuracy</span>
            </div>
            <p className="text-3xl font-bold text-white">{accuracy}%</p>
          </div>

          {/* XP Earned */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white text-sm">XP Earned</span>
            </div>
            <p className="text-3xl font-bold text-white">+{xpEarned}</p>
          </div>
        </div>

        {/* Perfect bonus indicator */}
        {isPerfect && (
          <div className="mb-6 py-3 px-4 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center gap-2">
            <Target className="w-5 h-5 text-white" />
            <p className="text-white font-medium">Perfect Bonus: +50% XP</p>
          </div>
        )}

        {/* Continue button */}
        <button
          ref={continueButtonRef}
          onClick={onContinue}
          className={clsx(
            "w-full py-4 px-6 rounded-2xl font-bold text-lg",
            "bg-white text-primary-600",
            "shadow-[0_4px_0_0_var(--color-primary-200)]",
            "hover:bg-surface-50 transition-all duration-100",
            "active:translate-y-1 active:shadow-none",
          )}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
