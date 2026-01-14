import { format } from "date-fns";

import type { UserProgress } from "../types";

const STORAGE_KEY = "dmv-learning-progress";
const STORAGE_VERSION = 1;

function createDefaultProgress(): UserProgress {
  const today = format(new Date(), "yyyy-MM-dd");

  return {
    version: STORAGE_VERSION,
    lastUpdated: new Date().toISOString(),
    sections: {},
    xp: {
      total: 0,
      todayXp: 0,
      lastXpDate: today,
      level: 1,
      xpHistory: [],
    },
    streak: {
      current: 0,
      longest: 0,
      lastActiveDate: "",
      freezesAvailable: 2,
      freezeUsedToday: false,
    },
    hearts: {
      current: 5,
      maxHearts: 5,
      lastRefillTime: new Date().toISOString(),
    },
    srs: {
      cards: {},
      reviewQueue: [],
      lastReviewDate: today,
    },
    dailyGoal: 20,
  };
}

export const storage = {
  get(): UserProgress {
    if (typeof window === "undefined") {
      return createDefaultProgress();
    }

    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        return createDefaultProgress();
      }

      const parsed = JSON.parse(data) as UserProgress;

      if (parsed.version !== STORAGE_VERSION) {
        return storage.migrate(parsed);
      }

      return parsed;
    } catch {
      return createDefaultProgress();
    }
  },

  set(progress: UserProgress): void {
    if (typeof window === "undefined") return;

    try {
      progress.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("Failed to save progress:", error);
    }
  },

  clear(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
  },

  migrate(oldData: Partial<UserProgress>): UserProgress {
    const defaultProgress = createDefaultProgress();
    return {
      ...defaultProgress,
      ...oldData,
      version: STORAGE_VERSION,
    };
  },

  export(): string {
    return JSON.stringify(storage.get(), null, 2);
  },

  import(data: string): boolean {
    try {
      const parsed = JSON.parse(data) as UserProgress;
      storage.set(parsed);
      return true;
    } catch {
      return false;
    }
  },
};
