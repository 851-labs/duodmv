import { format } from "date-fns";
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

import type { UserProgress, SectionProgress } from "../types";

import { calculateCurrentHearts, useHeart as useHeartLib } from "../lib/hearts";
import { storage } from "../lib/storage";
import { checkAndUpdateStreak } from "../lib/streak";
import { calculateLevel } from "../lib/xp";

interface ProgressContextValue {
  progress: UserProgress;
  isLoading: boolean;

  // XP actions
  addXp: (amount: number) => void;

  // Lesson actions
  completeLesson: (sectionId: string, lessonId: string, score: number, xpEarned: number) => void;
  startLesson: (sectionId: string, lessonId: string) => void;
  getSectionProgress: (sectionId: string) => SectionProgress | null;
  isLessonCompleted: (sectionId: string, lessonId: string) => boolean;
  isLessonUnlocked: (sectionId: string, lessonId: string, requiredLessons?: string[]) => boolean;

  // Heart actions
  useHeart: () => boolean;
  getHearts: () => number;

  // Streak actions
  getStreak: () => number;

  // Daily goal
  setDailyGoal: (goal: number) => void;
  isDailyGoalMet: () => boolean;

  // Utility
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => storage.get());
  const [isLoading, setIsLoading] = useState(true);

  // Initialize and sync with localStorage
  useEffect(() => {
    const saved = storage.get();

    // Update hearts based on time passed
    const updatedHearts = calculateCurrentHearts(saved.hearts);

    // Check if it's a new day and reset todayXp
    const today = format(new Date(), "yyyy-MM-dd");
    const isNewDay = saved.xp.lastXpDate !== today;

    const updated = {
      ...saved,
      hearts: updatedHearts,
      xp: isNewDay ? { ...saved.xp, todayXp: 0, lastXpDate: today } : saved.xp,
    };

    setProgress(updated);
    storage.set(updated);
    setIsLoading(false);
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (!isLoading) {
      storage.set(progress);
    }
  }, [progress, isLoading]);

  const addXp = useCallback((amount: number) => {
    setProgress((prev) => {
      const newTotal = prev.xp.total + amount;
      const newTodayXp = prev.xp.todayXp + amount;
      const newLevel = calculateLevel(newTotal);

      // Update streak
      const updatedStreak = checkAndUpdateStreak(prev.streak, prev.dailyGoal, newTodayXp);

      // Update XP history
      const today = format(new Date(), "yyyy-MM-dd");
      const historyIndex = prev.xp.xpHistory.findIndex((h) => h.date === today);
      const newHistory = [...prev.xp.xpHistory];

      if (historyIndex >= 0) {
        newHistory[historyIndex] = {
          date: today,
          xp: newHistory[historyIndex].xp + amount,
        };
      } else {
        newHistory.push({ date: today, xp: amount });
        // Keep only last 30 days
        if (newHistory.length > 30) {
          newHistory.shift();
        }
      }

      return {
        ...prev,
        xp: {
          ...prev.xp,
          total: newTotal,
          todayXp: newTodayXp,
          level: newLevel.level,
          lastXpDate: today,
          xpHistory: newHistory,
        },
        streak: updatedStreak,
      };
    });
  }, []);

  const completeLesson = useCallback(
    (sectionId: string, lessonId: string, score: number, xpEarned: number) => {
      setProgress((prev) => {
        const sectionProgress = prev.sections[sectionId] || {
          sectionId,
          completedLessons: [],
          currentLesson: null,
          bestScores: {},
          totalXpEarned: 0,
          unlockedAt: new Date().toISOString(),
        };

        const isNewCompletion = !sectionProgress.completedLessons.includes(lessonId);
        const previousBest = sectionProgress.bestScores[lessonId] || 0;

        return {
          ...prev,
          sections: {
            ...prev.sections,
            [sectionId]: {
              ...sectionProgress,
              completedLessons: isNewCompletion
                ? [...sectionProgress.completedLessons, lessonId]
                : sectionProgress.completedLessons,
              currentLesson: null,
              bestScores: {
                ...sectionProgress.bestScores,
                [lessonId]: Math.max(score, previousBest),
              },
              totalXpEarned: sectionProgress.totalXpEarned + xpEarned,
            },
          },
        };
      });

      addXp(xpEarned);
    },
    [addXp],
  );

  const startLesson = useCallback((sectionId: string, lessonId: string) => {
    setProgress((prev) => {
      const sectionProgress = prev.sections[sectionId] || {
        sectionId,
        completedLessons: [],
        currentLesson: null,
        bestScores: {},
        totalXpEarned: 0,
        unlockedAt: new Date().toISOString(),
      };

      return {
        ...prev,
        sections: {
          ...prev.sections,
          [sectionId]: {
            ...sectionProgress,
            currentLesson: lessonId,
          },
        },
      };
    });
  }, []);

  const getSectionProgress = useCallback(
    (sectionId: string): SectionProgress | null => {
      return progress.sections[sectionId] || null;
    },
    [progress.sections],
  );

  const isLessonCompleted = useCallback(
    (sectionId: string, lessonId: string): boolean => {
      const section = progress.sections[sectionId];
      return section?.completedLessons.includes(lessonId) || false;
    },
    [progress.sections],
  );

  const isLessonUnlocked = useCallback(
    (sectionId: string, lessonId: string, requiredLessons?: string[]): boolean => {
      if (!requiredLessons || requiredLessons.length === 0) {
        return true;
      }

      const section = progress.sections[sectionId];
      if (!section) {
        return requiredLessons.length === 0;
      }

      return requiredLessons.every((req) => section.completedLessons.includes(req));
    },
    [progress.sections],
  );

  const useHeart = useCallback((): boolean => {
    const updated = useHeartLib(progress.hearts);
    if (!updated) {
      return false;
    }

    setProgress((prev) => ({
      ...prev,
      hearts: updated,
    }));
    return true;
  }, [progress.hearts]);

  const getHearts = useCallback((): number => {
    return calculateCurrentHearts(progress.hearts).current;
  }, [progress.hearts]);

  const getStreak = useCallback((): number => {
    return progress.streak.current;
  }, [progress.streak]);

  const setDailyGoal = useCallback((goal: number) => {
    setProgress((prev) => ({
      ...prev,
      dailyGoal: goal,
    }));
  }, []);

  const isDailyGoalMet = useCallback((): boolean => {
    return progress.xp.todayXp >= progress.dailyGoal;
  }, [progress.xp.todayXp, progress.dailyGoal]);

  const resetProgress = useCallback(() => {
    storage.clear();
    setProgress(storage.get());
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        isLoading,
        addXp,
        completeLesson,
        startLesson,
        getSectionProgress,
        isLessonCompleted,
        isLessonUnlocked,
        useHeart,
        getHearts,
        getStreak,
        setDailyGoal,
        isDailyGoalMet,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
