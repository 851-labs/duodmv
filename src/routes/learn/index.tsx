import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Lock, CheckCircle, Clock } from "lucide-react";
import clsx from "clsx";
import { Header } from "../../components/layout/Header";
import { BottomNav } from "../../components/layout/BottomNav";
import { useProgress } from "../../store/progress-context";
import { sections, getLessonsBySectionId } from "../../data";

export const Route = createFileRoute("/learn/")({
	component: LearnPage,
});

function LearnPage() {
	const { progress } = useProgress();

	const getSectionStatus = (sectionId: string) => {
		const sectionProgress = progress.sections[sectionId];
		const lessons = getLessonsBySectionId(sectionId);

		if (!sectionProgress) {
			return { completed: 0, total: lessons.length, isComplete: false };
		}

		return {
			completed: sectionProgress.completedLessons.length,
			total: lessons.length,
			isComplete: sectionProgress.completedLessons.length >= lessons.length,
		};
	};

	return (
		<div className="min-h-screen bg-surface-50 pb-20">
			<Header />

			<main className="max-w-2xl mx-auto px-4 py-6">
				{/* Back link */}
				<Link
					to="/"
					className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-700 mb-6"
				>
					<ChevronLeft className="w-5 h-5" />
					<span>Home</span>
				</Link>

				<h1 className="text-2xl font-bold text-zinc-900 mb-6">
					Learn to Drive
				</h1>

				<div className="space-y-4">
					{sections.map((section, index) => {
						const status = getSectionStatus(section.id);
						const progressPercent =
							status.total > 0
								? Math.round((status.completed / status.total) * 100)
								: 0;

						// For now, all sections are unlocked. Later we can add logic to lock based on progress
						const isLocked = false;

						return (
							<Link
								key={section.id}
								to="/learn/$sectionId"
								params={{ sectionId: section.id }}
								disabled={isLocked}
								className={clsx(
									"block bg-white rounded-xl border-2 p-4 transition-all shadow-[0_2px_0_0_var(--color-surface-200)]",
									isLocked
										? "opacity-60 cursor-not-allowed border-surface-200"
										: "hover:border-primary-300 hover:shadow-[0_2px_0_0_var(--color-primary-300)] active:translate-y-0.5 active:shadow-none border-surface-200"
								)}
							>
								<div className="flex items-start gap-4">
									{/* Section number badge */}
									<div
										className={clsx(
											"flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg",
											status.isComplete
												? "bg-primary-500 text-white"
												: "bg-surface-100 text-zinc-600"
										)}
										style={
											!status.isComplete && !isLocked
												? { backgroundColor: `${section.color}20`, color: section.color }
												: {}
										}
									>
										{status.isComplete ? (
											<CheckCircle className="w-6 h-6" />
										) : isLocked ? (
											<Lock className="w-5 h-5" />
										) : (
											section.number
										)}
									</div>

									{/* Section info */}
									<div className="flex-1 min-w-0">
										<h2 className="font-semibold text-zinc-900 mb-1">
											{section.title}
										</h2>
										<p className="text-sm text-zinc-500 mb-3 line-clamp-1">
											{section.description}
										</p>

										{/* Progress bar */}
										<div className="flex items-center gap-3">
											<div className="flex-1 h-2 bg-surface-200 rounded-full overflow-hidden">
												<div
													className="h-full rounded-full transition-all duration-500"
													style={{
														width: `${progressPercent}%`,
														backgroundColor: section.color,
													}}
												/>
											</div>
											<span className="text-xs text-zinc-400 whitespace-nowrap">
												{status.completed}/{status.total}
											</span>
										</div>
									</div>

									{/* Estimated time */}
									<div className="flex items-center gap-1 text-xs text-zinc-400">
										<Clock className="w-4 h-4" />
										<span>{section.estimatedMinutes}m</span>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</main>

			<BottomNav />
		</div>
	);
}
