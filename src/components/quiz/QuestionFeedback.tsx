import clsx from "clsx";
import { CheckCircle, XCircle, BookOpen } from "lucide-react";
import type { Question } from "../../types";

interface QuestionFeedbackProps {
	question: Question;
	isCorrect: boolean;
	onContinue: () => void;
}

export function QuestionFeedback({
	question,
	isCorrect,
	onContinue,
}: QuestionFeedbackProps) {
	return (
		<div
			className={clsx(
				"fixed bottom-0 left-0 right-0 p-4 border-t-2",
				isCorrect
					? "bg-correct-100 border-correct-500"
					: "bg-incorrect-100 border-incorrect-500"
			)}
		>
			<div className="max-w-2xl mx-auto">
				<div className="flex items-start gap-4">
					<div
						className={clsx(
							"flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0",
							isCorrect ? "bg-correct-500" : "bg-incorrect-500"
						)}
					>
						{isCorrect ? (
							<CheckCircle className="w-6 h-6 text-white" />
						) : (
							<XCircle className="w-6 h-6 text-white" />
						)}
					</div>

					<div className="flex-1 min-w-0">
						<h3
							className={clsx(
								"font-bold text-lg",
								isCorrect ? "text-correct-600" : "text-incorrect-600"
							)}
						>
							{isCorrect ? "Correct!" : "Not quite"}
						</h3>

						<p className="text-zinc-700 mt-1 text-sm leading-relaxed">
							{question.explanation}
						</p>

						{question.handbookReference && (
							<div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
								<BookOpen className="w-3 h-3" />
								<span>{question.handbookReference}</span>
							</div>
						)}
					</div>
				</div>

				<button
					onClick={onContinue}
					className={clsx(
						"w-full mt-4 py-3 px-6 rounded-xl font-bold text-white transition-colors",
						isCorrect
							? "bg-correct-500 hover:bg-correct-600"
							: "bg-incorrect-500 hover:bg-incorrect-600"
					)}
				>
					Continue
				</button>
			</div>
		</div>
	);
}
