import { createFileRoute, Link } from "@tanstack/react-router";
import clsx from "clsx";
import { ChevronLeft, Trophy, Target, Flame, Zap, Settings } from "lucide-react";

import { XPDisplay } from "../components/gamification/XPDisplay";
import { BottomNav } from "../components/layout/BottomNav";
import { Header } from "../components/layout/Header";
import { sections, getLessonsBySectionId } from "../data";
import { calculateLevel, DAILY_GOALS } from "../lib/xp";
import { useProgress } from "../store/progress-context";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { progress, setDailyGoal } = useProgress();
  const level = calculateLevel(progress.xp.total);

  // Calculate stats
  const totalLessons = sections.reduce((acc, s) => acc + s.totalLessons, 0);
  const completedLessons = Object.values(progress.sections).reduce(
    (acc, s) => acc + s.completedLessons.length,
    0,
  );

  return (
    <div className="min-h-screen bg-surface-50 pb-20">
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Back link */}
        <Link to="/" className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-700">
          <ChevronLeft className="w-5 h-5" />
          <span>Home</span>
        </Link>

        {/* Profile header */}
        <div className="bg-white rounded-2xl p-6 border border-surface-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white text-2xl font-bold">
              {level.level}
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900">{level.title}</h1>
              <p className="text-zinc-500">Level {level.level}</p>
            </div>
          </div>

          <XPDisplay
            totalXp={progress.xp.total}
            todayXp={progress.xp.todayXp}
            showProgress
            size="lg"
          />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-surface-200">
            <div className="flex items-center gap-2 text-streak-500 mb-2">
              <Flame className="w-5 h-5" />
              <span className="font-medium">Streak</span>
            </div>
            <p className="text-3xl font-bold text-zinc-900">{progress.streak.current}</p>
            <p className="text-sm text-zinc-500">Best: {progress.streak.longest} days</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-surface-200">
            <div className="flex items-center gap-2 text-secondary-500 mb-2">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Total XP</span>
            </div>
            <p className="text-3xl font-bold text-zinc-900">{progress.xp.total}</p>
            <p className="text-sm text-zinc-500">+{progress.xp.todayXp} today</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-surface-200">
            <div className="flex items-center gap-2 text-primary-500 mb-2">
              <Trophy className="w-5 h-5" />
              <span className="font-medium">Lessons</span>
            </div>
            <p className="text-3xl font-bold text-zinc-900">{completedLessons}</p>
            <p className="text-sm text-zinc-500">of {totalLessons} complete</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-surface-200">
            <div className="flex items-center gap-2 text-hearts-500 mb-2">
              <Target className="w-5 h-5" />
              <span className="font-medium">Progress</span>
            </div>
            <p className="text-3xl font-bold text-zinc-900">
              {totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0}%
            </p>
            <p className="text-sm text-zinc-500">overall</p>
          </div>
        </div>

        {/* Daily Goal Settings */}
        <div className="bg-white rounded-2xl p-6 border border-surface-200">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="w-5 h-5 text-zinc-500" />
            <h2 className="font-semibold text-zinc-900">Daily Goal</h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {DAILY_GOALS.map((goal) => (
              <button
                key={goal.xp}
                onClick={() => setDailyGoal(goal.xp)}
                className={clsx(
                  "p-4 rounded-xl border-2 transition-all text-left",
                  progress.dailyGoal === goal.xp
                    ? "border-primary-500 bg-primary-50"
                    : "border-surface-200 hover:border-primary-300",
                )}
              >
                <p className="font-semibold text-zinc-900">{goal.label}</p>
                <p className="text-sm text-zinc-500">
                  {goal.xp} XP · {goal.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Section progress */}
        <div className="bg-white rounded-2xl p-6 border border-surface-200">
          <h2 className="font-semibold text-zinc-900 mb-4">Section Progress</h2>

          <div className="space-y-4">
            {sections.map((section) => {
              const sectionProgress = progress.sections[section.id];
              const lessons = getLessonsBySectionId(section.id);
              const completed = sectionProgress?.completedLessons.length || 0;
              const percent =
                lessons.length > 0 ? Math.round((completed / lessons.length) * 100) : 0;

              return (
                <div key={section.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-700 truncate pr-2">{section.title}</span>
                    <span className="text-zinc-500">
                      {completed}/{lessons.length}
                    </span>
                  </div>
                  <div className="h-2 bg-surface-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${percent}%`,
                        backgroundColor: section.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
