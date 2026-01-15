import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useCallback, useRef } from "react";

import { useHotkeyPress } from "../../lib/use-hotkey-press";
import type { LearnContent } from "../../types";

import { Button } from "../ui/Button";
import { LearnSlide } from "./LearnSlide";

interface LearnContainerProps {
  lessonTitle: string;
  content: LearnContent[];
  onComplete: () => void;
  onExit: () => void;
}

export function LearnContainer({ lessonTitle, content, onComplete, onExit }: LearnContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);

  const currentContent = content[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === content.length - 1;
  const progress = ((currentIndex + 1) / content.length) * 100;

  const handleNext = useCallback(() => {
    if (isLast) {
      onComplete();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isLast, onComplete]);

  const handlePrevious = useCallback(() => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [isFirst]);

  useHotkeyPress([
    { keys: ["Enter", " ", "ArrowRight"], ref: nextButtonRef, onTrigger: handleNext },
    { keys: ["ArrowLeft"], ref: prevButtonRef, onTrigger: handlePrevious, pressClass: "pressed-sm" },
  ]);

  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-surface-200 px-4 py-3 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <button
              onClick={onExit}
              className="p-2 rounded-full hover:bg-surface-100 transition-colors"
              aria-label="Exit lesson"
            >
              <X className="w-6 h-6 text-zinc-500" />
            </button>

            <div className="flex-1">
              <p className="text-sm text-zinc-500">{lessonTitle}</p>
            </div>

            <span className="text-sm text-zinc-400">
              {currentIndex + 1} / {content.length}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-surface-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-secondary-400 to-secondary-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Content area */}
      <main className="flex-1 px-4 py-8 pb-32">
        <div className="max-w-2xl mx-auto">
          <LearnSlide content={currentContent} />
        </div>
      </main>

      {/* Navigation footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-surface-200 p-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          {/* Previous button */}
          <Button
            ref={prevButtonRef}
            onClick={handlePrevious}
            disabled={isFirst}
            variant="outline"
            className="w-14 h-14 !p-0"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Next / Continue button */}
          <Button
            ref={nextButtonRef}
            onClick={handleNext}
            variant="primary"
            size="lg"
            fullWidth
            icon={<ChevronRight className="w-5 h-5" />}
            iconPosition="right"
          >
            {isLast ? "Start Quiz" : "Got it"}
          </Button>
        </div>
      </footer>
    </div>
  );
}
