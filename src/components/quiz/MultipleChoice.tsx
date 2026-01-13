import { useState } from "react";
import clsx from "clsx";
import type { MultipleChoiceQuestion } from "../../types";

interface MultipleChoiceProps {
	question: MultipleChoiceQuestion;
	onAnswer: (isCorrect: boolean) => void;
	disabled?: boolean;
}

export function MultipleChoice({
	question,
	onAnswer,
	disabled = false,
}: MultipleChoiceProps) {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [hasAnswered, setHasAnswered] = useState(false);

	const handleSelect = (index: number) => {
		if (disabled || hasAnswered) return;

		setSelectedIndex(index);
		setHasAnswered(true);

		const isCorrect = index === question.correctIndex;
		onAnswer(isCorrect);
	};

	const getOptionClass = (index: number) => {
		if (!hasAnswered) {
			return selectedIndex === index
				? "border-primary-500 bg-primary-50"
				: "border-surface-200 bg-white hover:border-surface-300 hover:bg-surface-50";
		}

		if (index === question.correctIndex) {
			return "border-correct-500 bg-correct-100";
		}

		if (index === selectedIndex) {
			return "border-incorrect-500 bg-incorrect-100";
		}

		return "border-surface-200 bg-surface-100 opacity-50";
	};

	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold text-zinc-900 leading-relaxed">
				{question.question}
			</h2>

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
				{question.options.map((option, index) => (
					<button
						key={index}
						onClick={() => handleSelect(index)}
						disabled={disabled || hasAnswered}
						className={clsx(
							"w-full p-4 text-left rounded-xl border-2 transition-all duration-200",
							"font-medium text-zinc-800",
							"disabled:cursor-not-allowed",
							getOptionClass(index)
						)}
					>
						<span className="flex items-center gap-3">
							<span
								className={clsx(
									"flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold",
									hasAnswered && index === question.correctIndex
										? "bg-correct-500 text-white"
										: hasAnswered && index === selectedIndex
											? "bg-incorrect-500 text-white"
											: "bg-surface-200 text-zinc-600"
								)}
							>
								{String.fromCharCode(65 + index)}
							</span>
							<span>{option}</span>
						</span>
					</button>
				))}
			</div>
		</div>
	);
}
