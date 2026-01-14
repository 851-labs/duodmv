export interface SectionProgress {
  sectionId: string;
  completedLessons: string[];
  currentLesson: string | null;
  bestScores: Record<string, number>;
  totalXpEarned: number;
  unlockedAt: string;
  completedAt?: string;
}

export interface XPData {
  total: number;
  todayXp: number;
  lastXpDate: string;
  level: number;
  xpHistory: Array<{
    date: string;
    xp: number;
  }>;
}

export interface StreakData {
  current: number;
  longest: number;
  lastActiveDate: string;
  freezesAvailable: number;
  freezeUsedToday: boolean;
}

export interface HeartsData {
  current: number;
  maxHearts: number;
  lastRefillTime: string;
  unlimitedUntil?: string;
}

export interface SRSCard {
  questionId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: string;
  lastQuality: number;
}

export interface SRSData {
  cards: Record<string, SRSCard>;
  reviewQueue: string[];
  lastReviewDate: string;
}

export interface UserProgress {
  version: number;
  lastUpdated: string;
  sections: Record<string, SectionProgress>;
  xp: XPData;
  streak: StreakData;
  hearts: HeartsData;
  srs: SRSData;
  dailyGoal: number;
}
