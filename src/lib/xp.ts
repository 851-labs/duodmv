export interface LevelInfo {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
}

export const LEVELS: LevelInfo[] = [
  { level: 1, title: "Learner", minXp: 0, maxXp: 50 },
  { level: 2, title: "Beginner", minXp: 50, maxXp: 120 },
  { level: 3, title: "Road Rookie", minXp: 120, maxXp: 200 },
  { level: 4, title: "Student Driver", minXp: 200, maxXp: 300 },
  { level: 5, title: "Getting There", minXp: 300, maxXp: 450 },
  { level: 6, title: "Street Smart", minXp: 450, maxXp: 650 },
  { level: 7, title: "Traffic Trainee", minXp: 650, maxXp: 900 },
  { level: 8, title: "Law Learner", minXp: 900, maxXp: 1200 },
  { level: 9, title: "Safety Student", minXp: 1200, maxXp: 1600 },
  { level: 10, title: "Rules Expert", minXp: 1600, maxXp: 2100 },
  { level: 11, title: "Road Scholar", minXp: 2100, maxXp: 2700 },
  { level: 12, title: "Signs Master", minXp: 2700, maxXp: 3400 },
  { level: 13, title: "Highway Hero", minXp: 3400, maxXp: 4200 },
  { level: 14, title: "Traffic Ace", minXp: 4200, maxXp: 5100 },
  { level: 15, title: "DMV Ready", minXp: 5100, maxXp: 6100 },
  { level: 16, title: "Test Taker", minXp: 6100, maxXp: 7200 },
  { level: 17, title: "Almost There", minXp: 7200, maxXp: 8500 },
  { level: 18, title: "Permit Pro", minXp: 8500, maxXp: 10000 },
  { level: 19, title: "License Legend", minXp: 10000, maxXp: 12000 },
  { level: 20, title: "Road Master", minXp: 12000, maxXp: Number.POSITIVE_INFINITY },
];

export function calculateLevel(totalXp: number): LevelInfo {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (totalXp >= LEVELS[i].minXp) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

export function getXpForNextLevel(totalXp: number): {
  current: number;
  needed: number;
  progress: number;
} {
  const level = calculateLevel(totalXp);
  const xpIntoLevel = totalXp - level.minXp;
  const xpForLevel = level.maxXp - level.minXp;

  if (level.maxXp === Number.POSITIVE_INFINITY) {
    return { current: xpIntoLevel, needed: 0, progress: 100 };
  }

  return {
    current: xpIntoLevel,
    needed: xpForLevel,
    progress: Math.round((xpIntoLevel / xpForLevel) * 100),
  };
}

export function calculateLessonXp(
  baseXp: number,
  accuracy: number,
  isPerfect: boolean,
  streakDays: number,
): number {
  let xp = baseXp;

  // Accuracy bonus (0-100%)
  xp = Math.round(xp * (accuracy / 100));

  // Perfect lesson bonus (+50%)
  if (isPerfect) {
    xp = Math.round(xp * 1.5);
  }

  // Streak multiplier (up to 2x at 7+ days)
  if (streakDays >= 7) {
    xp = Math.round(xp * 1.25);
  } else if (streakDays >= 3) {
    xp = Math.round(xp * 1.1);
  }

  return Math.max(xp, 1);
}

export const DAILY_GOALS = [
  { xp: 10, label: "Casual", description: "5 min/day" },
  { xp: 20, label: "Regular", description: "10 min/day" },
  { xp: 30, label: "Serious", description: "15 min/day" },
  { xp: 50, label: "Intense", description: "20 min/day" },
];
