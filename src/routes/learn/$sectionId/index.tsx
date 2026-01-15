import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { ChevronLeft, Lock, CheckCircle, Play } from "lucide-react";

import { StarRating } from "../../../components/gamification/StarRating";
import { BottomNav } from "../../../components/layout/BottomNav";
import { Header } from "../../../components/layout/Header";
import { getSectionById, getLessonsBySectionId } from "../../../data";
import { useProgress } from "../../../store/progress-context";

export const Route = createFileRoute("/learn/$sectionId/")({
  component: SectionPage,
});

function SectionPage() {
  const { sectionId } = Route.useParams();
  const navigate = useNavigate();
  const { isLessonCompleted, isLessonUnlocked, getSectionProgress } = useProgress();

  const section = getSectionById(sectionId);
  const lessons = getLessonsBySectionId(sectionId);
  const sectionProgress = getSectionProgress(sectionId);

  if (!section) {
    return (
      <div className="min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-zinc-900">Section not found</h1>
          <Link to="/" className="text-primary-600 mt-2 inline-block">
            Back to sections
          </Link>
        </div>
      </div>
    );
  }

  const completedCount = sectionProgress?.completedLessons.length || 0;

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

        {/* Section header */}
        <div className="mb-8">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-white font-bold text-xl mb-4"
            style={{ backgroundColor: section.color }}
          >
            {section.number}
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">{section.title}</h1>
          <p className="text-zinc-500">{section.description}</p>

          {/* Progress */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-2 bg-surface-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(completedCount / lessons.length) * 100}%`,
                  backgroundColor: section.color,
                }}
              />
            </div>
            <span className="text-sm text-zinc-500">
              {completedCount}/{lessons.length} lessons
            </span>
          </div>
        </div>

        {/* Lessons tree */}
        <div className="space-y-4">
          {lessons
            .sort((a, b) => a.order - b.order)
            .map((lesson, index) => {
              const isCompleted = isLessonCompleted(sectionId, lesson.id);
              const isUnlocked = isLessonUnlocked(sectionId, lesson.id, lesson.requiredLessons);
              const bestScore = sectionProgress?.bestScores[lesson.id];

              return (
                <div key={lesson.id} className="relative">
                  {/* Connector line */}
                  {index > 0 && (
                    <div
                      className={clsx(
                        "absolute left-6 -top-4 w-0.5 h-4",
                        isUnlocked ? "bg-surface-300" : "bg-surface-200",
                      )}
                    />
                  )}

                  <button
                    onClick={() => {
                      if (isUnlocked) {
                        void navigate({
                          to: "/learn/$sectionId/$lessonId",
                          params: { sectionId, lessonId: lesson.id },
                        });
                      }
                    }}
                    disabled={!isUnlocked}
                    className={clsx(
                      "relative w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                      isCompleted
                        ? "bg-primary-50 border-primary-400 shadow-[0_2px_0_0_var(--color-primary-400)] active:translate-y-0.5 active:shadow-none"
                        : isUnlocked
                          ? "bg-white border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)] hover:border-primary-300 hover:shadow-[0_2px_0_0_var(--color-primary-300)] active:translate-y-0.5 active:shadow-none"
                          : "bg-surface-100 border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)] opacity-60 cursor-not-allowed",
                    )}
                  >
                    {/* Star rating badge */}
                    {isCompleted && bestScore && (
                      <div className="absolute top-2 right-2">
                        <StarRating score={bestScore} />
                      </div>
                    )}

                    {/* Lesson icon */}
                    <div
                      className={clsx(
                        "flex items-center justify-center w-12 h-12 rounded-xl",
                        isCompleted
                          ? "bg-primary-500 text-white"
                          : isUnlocked
                            ? "bg-white border-2 border-surface-200"
                            : "bg-surface-200 text-zinc-400",
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : !isUnlocked ? (
                        <Lock className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5 text-zinc-500" />
                      )}
                    </div>

                    {/* Lesson info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-zinc-900">{lesson.title}</h3>
                        {lesson.type === "checkpoint" && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-streak-100 text-streak-600 rounded-full">
                            Review
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500 line-clamp-1">{lesson.description}</p>
                    </div>

                    {/* XP reward - hidden for now
                    <div className="text-right">
                      <span className="text-sm font-medium text-secondary-500">
                        +{lesson.xpReward} XP
                      </span>
                    </div>
                    */}
                  </button>
                </div>
              );
            })}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
