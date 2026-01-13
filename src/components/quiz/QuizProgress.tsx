import clsx from "clsx";

interface QuizProgressProps {
	current: number;
	total: number;
	correctCount: number;
}

export function QuizProgress({ current, total, correctCount }: QuizProgressProps) {
	const progress = ((current) / total) * 100;

	return (
		<div className="space-y-2">
			<div className="flex justify-between text-sm text-zinc-500">
				<span>
					Question {current + 1} of {total}
				</span>
				<span className="text-correct-600 font-medium">
					{correctCount} correct
				</span>
			</div>

			<div className="h-3 bg-surface-200 rounded-full overflow-hidden">
				<div
					className={clsx(
						"h-full rounded-full transition-all duration-500 ease-out",
						"bg-gradient-to-r from-primary-400 to-primary-500"
					)}
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	);
}
