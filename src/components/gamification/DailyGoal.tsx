import { Target, Check } from "lucide-react";
import clsx from "clsx";

interface DailyGoalProps {
	currentXp: number;
	goalXp: number;
}

export function DailyGoal({ currentXp, goalXp }: DailyGoalProps) {
	const progress = Math.min((currentXp / goalXp) * 100, 100);
	const isComplete = currentXp >= goalXp;

	return (
		<div
			className={clsx(
				"p-4 rounded-xl border-2",
				isComplete
					? "bg-primary-50 border-primary-200"
					: "bg-white border-surface-200"
			)}
		>
			<div className="flex items-center justify-between mb-3">
				<div className="flex items-center gap-2">
					{isComplete ? (
						<div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500">
							<Check className="w-5 h-5 text-white" />
						</div>
					) : (
						<div className="flex items-center justify-center w-8 h-8 rounded-full bg-surface-100">
							<Target className="w-5 h-5 text-zinc-500" />
						</div>
					)}
					<div>
						<p className="font-semibold text-zinc-900">Daily Goal</p>
						<p className="text-sm text-zinc-500">
							{isComplete ? "Completed!" : `${goalXp - currentXp} XP to go`}
						</p>
					</div>
				</div>
				<span
					className={clsx(
						"text-lg font-bold",
						isComplete ? "text-primary-600" : "text-zinc-600"
					)}
				>
					{currentXp}/{goalXp}
				</span>
			</div>

			<div className="h-3 bg-surface-200 rounded-full overflow-hidden">
				<div
					className={clsx(
						"h-full rounded-full transition-all duration-500",
						isComplete
							? "bg-primary-500"
							: "bg-gradient-to-r from-secondary-400 to-secondary-500"
					)}
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	);
}
