import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Target, Trophy } from "lucide-react";
import { Header } from "../components/layout/Header";
import { BottomNav } from "../components/layout/BottomNav";
import { DailyGoal } from "../components/gamification/DailyGoal";
import { useProgress } from "../store/progress-context";
import { sections, getLessonsBySectionId } from "../data";
import { calculateLevel } from "../lib/xp";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const { progress } = useProgress();
	const level = calculateLevel(progress.xp.total);

	// Calculate overall progress
	const totalLessons = sections.reduce((acc, s) => acc + s.totalLessons, 0);
	const completedLessons = Object.values(progress.sections).reduce(
		(acc, s) => acc + s.completedLessons.length,
		0
	);

	// Find the next section to continue
	const getNextSection = () => {
		for (const section of sections) {
			const sectionProgress = progress.sections[section.id];
			const sectionLessons = getLessonsBySectionId(section.id);

			if (!sectionProgress) {
				return { section, isNew: true };
			}

			if (sectionProgress.completedLessons.length < sectionLessons.length) {
				return { section, isNew: false };
			}
		}
		return null;
	};

	const nextSection = getNextSection();

	return (
		<div className="min-h-screen bg-surface-50 pb-20">
			<Header />

			<main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
				{/* Welcome section */}
				<div className="text-center py-4">
					<h1 className="text-2xl font-bold text-zinc-900">
						Welcome back! 👋
					</h1>
					<p className="text-zinc-500 mt-1">
						Level {level.level} · {level.title}
					</p>
				</div>

				{/* Daily Goal */}
				<DailyGoal
					currentXp={progress.xp.todayXp}
					goalXp={progress.dailyGoal}
				/>

				{/* Continue Learning Card */}
				{nextSection && (
					<Link
						to="/learn/$sectionId"
						params={{ sectionId: nextSection.section.id }}
						className="block"
					>
						<div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white shadow-lg shadow-primary-500/20">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-primary-100 text-sm font-medium mb-1">
										{nextSection.isNew ? "Start Learning" : "Continue Learning"}
									</p>
									<h2 className="text-xl font-bold mb-2">
										{nextSection.section.title}
									</h2>
									<p className="text-primary-100 text-sm">
										{nextSection.section.description}
									</p>
								</div>
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
									<ArrowRight className="w-6 h-6" />
								</div>
							</div>
						</div>
					</Link>
				)}

				{/* Quick stats */}
				<div className="grid grid-cols-3 gap-4">
					<div className="bg-white rounded-xl p-4 border-2 border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)] text-center">
						<BookOpen className="w-6 h-6 text-secondary-500 mx-auto mb-2" />
						<p className="text-2xl font-bold text-zinc-900">
							{completedLessons}
						</p>
						<p className="text-xs text-zinc-500">Lessons Done</p>
					</div>

					<div className="bg-white rounded-xl p-4 border-2 border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)] text-center">
						<Target className="w-6 h-6 text-streak-500 mx-auto mb-2" />
						<p className="text-2xl font-bold text-zinc-900">
							{progress.streak.current}
						</p>
						<p className="text-xs text-zinc-500">Day Streak</p>
					</div>

					<div className="bg-white rounded-xl p-4 border-2 border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)] text-center">
						<Trophy className="w-6 h-6 text-primary-500 mx-auto mb-2" />
						<p className="text-2xl font-bold text-zinc-900">
							{Math.round((completedLessons / totalLessons) * 100) || 0}%
						</p>
						<p className="text-xs text-zinc-500">Complete</p>
					</div>
				</div>

				{/* Quick actions */}
				<div className="space-y-3">
					<Link
						to="/learn"
						className="flex items-center justify-between bg-white rounded-xl p-4 border-2 border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)] hover:border-primary-300 hover:shadow-[0_2px_0_0_var(--color-primary-300)] active:translate-y-0.5 active:shadow-none transition-all"
					>
						<div className="flex items-center gap-3">
							<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100">
								<BookOpen className="w-5 h-5 text-primary-600" />
							</div>
							<div>
								<p className="font-semibold text-zinc-900">All Sections</p>
								<p className="text-sm text-zinc-500">
									{sections.length} sections to learn
								</p>
							</div>
						</div>
						<ArrowRight className="w-5 h-5 text-zinc-400" />
					</Link>

					</div>
			</main>

			<BottomNav />
		</div>
	);
}
