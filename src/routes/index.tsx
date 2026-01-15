import { createFileRoute, Link } from "@tanstack/react-router";
import clsx from "clsx";
import { ArrowRight, BookOpen, CheckCircle, Clock, Target, Trophy } from "lucide-react";

import { DailyGoal } from "../components/gamification/DailyGoal";
import { BottomNav } from "../components/layout/BottomNav";
import { Header } from "../components/layout/Header";
import { sections, getLessonsBySectionId } from "../data";
import { calculateLevel } from "../lib/xp";
import { useProgress } from "../store/progress-context";

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
    0,
  );

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
          <h1 className="text-2xl font-bold text-zinc-900">Welcome back!</h1>
          <p className="text-zinc-500 mt-1">
            Level {level.level} · {level.title}
          </p>
        </div>

        {/* Daily Goal */}
        <DailyGoal currentXp={progress.xp.todayXp} goalXp={progress.dailyGoal} />

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
                  <h2 className="text-xl font-bold mb-2">{nextSection.section.title}</h2>
                  <p className="text-primary-100 text-sm">{nextSection.section.description}</p>
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
            <p className="text-2xl font-bold text-zinc-900">{completedLessons}</p>
            <p className="text-xs text-zinc-500">Lessons Done</p>
          </div>

          <div className="bg-white rounded-xl p-4 border-2 border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)] text-center">
            <Target className="w-6 h-6 text-streak-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-zinc-900">{progress.streak.current}</p>
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

        {/* All Sections */}
        <div>
          <h2 className="text-lg font-bold text-zinc-900 mb-4">Chapters</h2>
          <div className="space-y-3">
            {sections.map((section) => {
              const status = getSectionStatus(section.id);
              const progressPercent =
                status.total > 0 ? Math.round((status.completed / status.total) * 100) : 0;

              return (
                <Link
                  key={section.id}
                  to="/learn/$sectionId"
                  params={{ sectionId: section.id }}
                  className={clsx(
                    "block bg-white rounded-xl border-2 p-4 transition-all shadow-[0_2px_0_0_var(--color-surface-200)]",
                    "hover:border-primary-300 hover:shadow-[0_2px_0_0_var(--color-primary-300)] active:translate-y-0.5 active:shadow-none border-surface-200",
                  )}
                >
                  <div className="flex items-start gap-4">
                    {/* Section number badge */}
                    <div
                      className={clsx(
                        "flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg",
                        status.isComplete
                          ? "bg-primary-500 text-white"
                          : "bg-surface-100 text-zinc-600",
                      )}
                      style={
                        !status.isComplete
                          ? { backgroundColor: `${section.color}20`, color: section.color }
                          : {}
                      }
                    >
                      {status.isComplete ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        section.number
                      )}
                    </div>

                    {/* Section info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-zinc-900 mb-1">{section.title}</h3>
                      <p className="text-sm text-zinc-500 mb-3 line-clamp-1">{section.description}</p>

                      {/* Progress bar */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-surface-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${progressPercent}%`,
                              backgroundColor: status.isComplete ? "var(--color-primary-500)" : section.color,
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
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
