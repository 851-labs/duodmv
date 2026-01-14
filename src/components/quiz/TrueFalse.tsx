import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { Check, X } from "lucide-react";
import type { TrueFalseQuestion } from "../../types";

interface TrueFalseProps {
	question: TrueFalseQuestion;
	onAnswer: (isCorrect: boolean) => void;
	disabled?: boolean;
}

export function TrueFalse({
	question,
	onAnswer,
	disabled = false,
}: TrueFalseProps) {
	const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
	const [hasAnswered, setHasAnswered] = useState(false);

	const handleSelect = useCallback((answer: boolean) => {
		if (disabled || hasAnswered) return;

		setSelectedAnswer(answer);
		setHasAnswered(true);

		const isCorrect = answer === question.isTrue;
		onAnswer(isCorrect);
	}, [disabled, hasAnswered, question.isTrue, onAnswer]);

	// Keyboard shortcuts: T/F or 1/2
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Ignore if user is typing in an input
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
				return;
			}

			const key = e.key.toUpperCase();

			// T or 1 for True
			if (key === "T" || key === "1") {
				handleSelect(true);
			}
			// F or 2 for False
			else if (key === "F" || key === "2") {
				handleSelect(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleSelect]);

	const getButtonClass = (buttonValue: boolean) => {
		const baseClass = "flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all duration-100 font-bold text-lg";

		if (!hasAnswered) {
			if (selectedAnswer === buttonValue) {
				return clsx(
					baseClass,
					"bg-secondary-50 border-2 border-secondary-400",
					"shadow-[0_2px_0_0_#38bdf8]"
				);
			}
			return clsx(
				baseClass,
				"bg-white border-2 border-surface-300",
				"shadow-[0_2px_0_0_var(--color-surface-300)]",
				"hover:bg-surface-50 hover:border-surface-400 hover:shadow-[0_2px_0_0_var(--color-surface-400)]",
				"active:translate-y-0.5 active:shadow-none"
			);
		}

		// After answering
		const isCorrectAnswer = buttonValue === question.isTrue;
		const wasSelected = buttonValue === selectedAnswer;

		if (isCorrectAnswer) {
			return clsx(
				baseClass,
				"bg-correct-50 border-2 border-correct-500",
				"shadow-[0_2px_0_0_var(--color-correct-500)]"
			);
		}

		if (wasSelected && !isCorrectAnswer) {
			return clsx(
				baseClass,
				"bg-incorrect-50 border-2 border-incorrect-500",
				"shadow-[0_2px_0_0_#ef4444]"
			);
		}

		return clsx(
			baseClass,
			"bg-surface-100 border-2 border-surface-200",
			"shadow-[0_2px_0_0_var(--color-surface-200)] opacity-50"
		);
	};

	return (
		<div className="space-y-6">
			<h2 className="text-xl font-semibold text-zinc-900 leading-relaxed">
				{question.statement}
			</h2>

			<div className="grid grid-cols-2 gap-4 mt-8">
				<button
					onClick={() => handleSelect(true)}
					disabled={disabled || hasAnswered}
					className={clsx(
						getButtonClass(true),
						"disabled:cursor-not-allowed relative"
					)}
				>
					<kbd
						className={clsx(
							"absolute top-2 right-2 w-6 h-6 rounded text-xs font-bold flex items-center justify-center",
							hasAnswered
								? "bg-surface-200 text-surface-400"
								: "bg-surface-200 text-surface-500"
						)}
					>
						T
					</kbd>
					<div
						className={clsx(
							"flex items-center justify-center w-14 h-14 rounded-xl",
							hasAnswered && question.isTrue
								? "bg-correct-500 text-white"
								: hasAnswered && selectedAnswer === true
									? "bg-incorrect-500 text-white"
									: "bg-primary-100 text-primary-600"
						)}
					>
						<Check className="w-7 h-7" strokeWidth={3} />
					</div>
					<span
						className={clsx(
							"text-lg",
							hasAnswered && question.isTrue
								? "text-correct-700"
								: hasAnswered && selectedAnswer === true
									? "text-incorrect-700"
									: "text-zinc-700"
						)}
					>
						TRUE
					</span>
				</button>

				<button
					onClick={() => handleSelect(false)}
					disabled={disabled || hasAnswered}
					className={clsx(
						getButtonClass(false),
						"disabled:cursor-not-allowed relative"
					)}
				>
					<kbd
						className={clsx(
							"absolute top-2 right-2 w-6 h-6 rounded text-xs font-bold flex items-center justify-center",
							hasAnswered
								? "bg-surface-200 text-surface-400"
								: "bg-surface-200 text-surface-500"
						)}
					>
						F
					</kbd>
					<div
						className={clsx(
							"flex items-center justify-center w-14 h-14 rounded-xl",
							hasAnswered && !question.isTrue
								? "bg-correct-500 text-white"
								: hasAnswered && selectedAnswer === false
									? "bg-incorrect-500 text-white"
									: "bg-incorrect-100 text-incorrect-500"
						)}
					>
						<X className="w-7 h-7" strokeWidth={3} />
					</div>
					<span
						className={clsx(
							"text-lg",
							hasAnswered && !question.isTrue
								? "text-correct-700"
								: hasAnswered && selectedAnswer === false
									? "text-incorrect-700"
									: "text-zinc-700"
						)}
					>
						FALSE
					</span>
				</button>
			</div>
		</div>
	);
}
