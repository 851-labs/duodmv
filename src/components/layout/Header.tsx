import { Link } from "@tanstack/react-router";
import { Car } from "lucide-react";
import { XPDisplay } from "../gamification/XPDisplay";
import { StreakCounter } from "../gamification/StreakCounter";
import { HeartsDisplay } from "../gamification/HeartsDisplay";
import { useProgress } from "../../store/progress-context";

export function Header() {
	const { progress, getHearts, getStreak } = useProgress();

	return (
		<header className="sticky top-0 z-50 bg-white border-b border-surface-200">
			<div className="max-w-5xl mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-2">
						<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500">
							<Car className="w-6 h-6 text-white" />
						</div>
						<span className="font-bold text-xl text-zinc-900 hidden sm:block">
							CA DMV
						</span>
					</Link>

					{/* Stats */}
					<div className="flex items-center gap-4">
						<StreakCounter streak={getStreak()} />
						<XPDisplay totalXp={progress.xp.total} />
						<HeartsDisplay hearts={getHearts()} />
					</div>
				</div>
			</div>
		</header>
	);
}
