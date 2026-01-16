import { useState, useCallback, useMemo, useRef } from "react";

import type { MultipleChoiceQuestion } from "../../types";

import { useHotkeyPress } from "../../lib/use-hotkey-press";
import { OptionButton } from "../ui/OptionButton";

interface MultipleChoiceProps {
  question: MultipleChoiceQuestion;
  onAnswer: (isCorrect: boolean) => void;
  disabled?: boolean;
}

function shuffleOptions(
  options: string[],
  correctIndex: number,
): { shuffledOptions: string[]; newCorrectIndex: number } {
  const indices = options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const shuffledOptions = indices.map((i) => options[i]);
  const newCorrectIndex = indices.indexOf(correctIndex);
  return { shuffledOptions, newCorrectIndex };
}

export function MultipleChoice({ question, onAnswer, disabled = false }: MultipleChoiceProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const optionRefs = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const { shuffledOptions, newCorrectIndex } = useMemo(
    () => shuffleOptions(question.options, question.correctIndex),
    [question.id],
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

  useHotkeyPress([
    {
      keys: ["a", "1"],
      ref: optionRefs[0],
      onTrigger: () => handleSelect(0),
      pressClass: "pressed-sm",
    },
    {
      keys: ["b", "2"],
      ref: optionRefs[1],
      onTrigger: () => handleSelect(1),
      pressClass: "pressed-sm",
    },
    {
      keys: ["c", "3"],
      ref: optionRefs[2],
      onTrigger: () => handleSelect(2),
      pressClass: "pressed-sm",
    },
    {
      keys: ["d", "4"],
      ref: optionRefs[3],
      onTrigger: () => handleSelect(3),
      pressClass: "pressed-sm",
    },
  ]);

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
            ref={optionRefs[index]}
            onClick={() => handleSelect(index)}
            disabled={
              disabled || (hasAnswered && index !== selectedIndex && index !== newCorrectIndex)
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
