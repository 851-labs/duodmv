import { useState, useEffect, useCallback, useMemo } from "react";

import type { MultipleChoiceQuestion } from "../../types";

import { OptionButton } from "../ui/OptionButton";

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion;
  onAnswer: (isCorrect: boolean) => void;
  disabled?: boolean;
}

function shuffleOptions(options: string[], correctIndex: number): { shuffledOptions: string[]; newCorrectIndex: number } {
  const indices = options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const shuffledOptions = indices.map(i => options[i]);
  const newCorrectIndex = indices.indexOf(correctIndex);
  return { shuffledOptions, newCorrectIndex };
}

export function MultipleChoice({ question, onAnswer, disabled = false }: MultipleChoiceProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const { shuffledOptions, newCorrectIndex } = useMemo(
    () => shuffleOptions(question.options, question.correctIndex),
    [question.id]
  );

  const handleSelect = useCallback(
    (index: number) => {
      if (disabled || hasAnswered) return;

      setSelectedIndex(index);
      setHasAnswered(true);

      const isCorrect = index === newCorrectIndex;
      onAnswer(isCorrect);
    },
    [disabled, hasAnswered, newCorrectIndex, onAnswer],
  );

  // Keyboard shortcuts: A/B/C/D or 1/2/3/4
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toUpperCase();
      let index = -1;

      // A-D keys
      if (key >= "A" && key <= "D") {
        index = key.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
      }
      // 1-4 number keys
      else if (key >= "1" && key <= "4") {
        index = parseInt(key) - 1; // 1=0, 2=1, 3=2, 4=3
      }

      // Check if valid index for this question
      if (index >= 0 && index < shuffledOptions.length) {
        handleSelect(index);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shuffledOptions.length, handleSelect]);

  const getOptionState = (index: number) => {
    if (!hasAnswered) {
      return selectedIndex === index ? "selected" : "default";
    }

    if (index === newCorrectIndex) {
      return "correct";
    }

    if (index === selectedIndex) {
      return "incorrect";
    }

    return "disabled";
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-zinc-900 leading-relaxed">{question.question}</h2>

      {question.imageUrl && (
        <div className="flex justify-center">
          <img
            src={question.imageUrl}
            alt="Question illustration"
            className="max-h-48 rounded-lg"
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 mt-6">
        {shuffledOptions.map((option, index) => (
          <OptionButton
            key={index}
            onClick={() => handleSelect(index)}
            disabled={
              disabled ||
              (hasAnswered && index !== selectedIndex && index !== newCorrectIndex)
            }
            state={getOptionState(index)}
            optionLabel={String.fromCharCode(65 + index)}
          >
            {option}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}
