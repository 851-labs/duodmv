import { useState } from "react";
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

	const handleSelect = (answer: boolean) => {
		if (disabled || hasAnswered) return;

		setSelectedAnswer(answer);
		setHasAnswered(true);

		const isCorrect = answer === question.isTrue;
		onAnswer(isCorrect);
	};

	const getButtonClass = (buttonValue: boolean) => {
		if (!hasAnswered) {
			return selectedAnswer === buttonValue
				? "border-primary-500 bg-primary-50"
				: "border-surface-200 bg-white hover:border-surface-300 hover:bg-surface-50";
		}

		// After answering
		const isCorrectAnswer = buttonValue === question.isTrue;
		const wasSelected = buttonValue === selectedAnswer;

		if (isCorrectAnswer) {
			return "border-correct-500 bg-correct-100";
		}

		if (wasSelected && !isCorrectAnswer) {
			return "border-incorrect-500 bg-incorrect-100";
		}

		return "border-surface-200 bg-surface-100 opacity-50";
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
						"flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all duration-200",
						"font-bold text-lg",
						"disabled:cursor-not-allowed",
						getButtonClass(true)
					)}
				>
					<div
						className={clsx(
							"flex items-center justify-center w-12 h-12 rounded-full",
							hasAnswered && question.isTrue
								? "bg-correct-500 text-white"
								: hasAnswered && selectedAnswer === true
									? "bg-incorrect-500 text-white"
									: "bg-primary-100 text-primary-600"
						)}
					>
						<Check className="w-6 h-6" />
					</div>
					<span
						className={clsx(
							hasAnswered && question.isTrue
								? "text-correct-600"
								: hasAnswered && selectedAnswer === true
									? "text-incorrect-600"
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
						"flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all duration-200",
						"font-bold text-lg",
						"disabled:cursor-not-allowed",
						getButtonClass(false)
					)}
				>
					<div
						className={clsx(
							"flex items-center justify-center w-12 h-12 rounded-full",
							hasAnswered && !question.isTrue
								? "bg-correct-500 text-white"
								: hasAnswered && selectedAnswer === false
									? "bg-incorrect-500 text-white"
									: "bg-hearts-100 text-hearts-500"
						)}
					>
						<X className="w-6 h-6" />
					</div>
					<span
						className={clsx(
							hasAnswered && !question.isTrue
								? "text-correct-600"
								: hasAnswered && selectedAnswer === false
									? "text-incorrect-600"
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
