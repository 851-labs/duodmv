import { Heart } from "lucide-react";
import clsx from "clsx";

interface HeartsDisplayProps {
	hearts: number;
	maxHearts?: number;
	size?: "sm" | "md" | "lg";
	showEmpty?: boolean;
}

export function HeartsDisplay({
	hearts,
	maxHearts = 5,
	size = "md",
	showEmpty = false,
}: HeartsDisplayProps) {
	const sizeClasses = {
		sm: "text-sm gap-0.5",
		md: "text-base gap-1",
		lg: "text-xl gap-1.5",
	};

	const iconSizes = {
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
	};

	if (showEmpty) {
		return (
			<div className={clsx("flex items-center", sizeClasses[size])}>
				{Array.from({ length: maxHearts }).map((_, i) => (
					<Heart
						key={i}
						className={clsx(
							iconSizes[size],
							i < hearts
								? "text-hearts-500 fill-hearts-500"
								: "text-surface-300"
						)}
					/>
				))}
			</div>
		);
	}

	return (
		<div className={clsx("flex items-center gap-1", sizeClasses[size])}>
			<Heart
				className={clsx(
					iconSizes[size],
					hearts > 0
						? "text-hearts-500 fill-hearts-500"
						: "text-surface-300"
				)}
			/>
			<span
				className={clsx(
					"font-bold",
					hearts > 0 ? "text-hearts-500" : "text-zinc-400"
				)}
			>
				{hearts}
			</span>
		</div>
	);
}
