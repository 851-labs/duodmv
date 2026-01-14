import { format, differenceInDays, parseISO, isToday, isYesterday } from "date-fns";

import type { StreakData } from "../types";

export function checkAndUpdateStreak(
  streak: StreakData,
  dailyGoal: number,
  todayXp: number,
): StreakData {
  const today = format(new Date(), "yyyy-MM-dd");
  const lastActive = streak.lastActiveDate;

  // First time user
  if (!lastActive) {
    if (todayXp >= dailyGoal) {
      return {
        ...streak,
        current: 1,
        longest: Math.max(1, streak.longest),
        lastActiveDate: today,
        freezeUsedToday: false,
      };
    }
    return streak;
  }

  const lastActiveDate = parseISO(lastActive);
  const daysDiff = differenceInDays(new Date(), lastActiveDate);

  // Already updated today
  if (isToday(lastActiveDate)) {
    // Check if goal newly met
    if (todayXp >= dailyGoal && streak.current === 0) {
      return {
        ...streak,
        current: 1,
        longest: Math.max(1, streak.longest),
        lastActiveDate: today,
      };
    }
    return streak;
  }

  // Yesterday - continue streak if goal met
  if (isYesterday(lastActiveDate)) {
    if (todayXp >= dailyGoal) {
      const newCurrent = streak.current + 1;
      return {
        ...streak,
        current: newCurrent,
        longest: Math.max(newCurrent, streak.longest),
        lastActiveDate: today,
        freezeUsedToday: false,
      };
    }
    return streak;
  }

  // Missed one day - use freeze if available
  if (daysDiff === 2 && streak.freezesAvailable > 0 && !streak.freezeUsedToday) {
    if (todayXp >= dailyGoal) {
      const newCurrent = streak.current + 1;
      return {
        ...streak,
        current: newCurrent,
        longest: Math.max(newCurrent, streak.longest),
        lastActiveDate: today,
        freezesAvailable: streak.freezesAvailable - 1,
        freezeUsedToday: true,
      };
    }
    return streak;
  }

  // Streak broken - reset
  if (todayXp >= dailyGoal) {
    return {
      ...streak,
      current: 1,
      lastActiveDate: today,
      freezeUsedToday: false,
    };
  }

  // Streak broken and goal not met
  return {
    ...streak,
    current: 0,
    freezeUsedToday: false,
  };
}

export function getStreakStatus(streak: StreakData): {
  isActive: boolean;
  isAtRisk: boolean;
  daysUntilLoss: number;
} {
  if (!streak.lastActiveDate) {
    return { isActive: false, isAtRisk: false, daysUntilLoss: 0 };
  }

  const lastActiveDate = parseISO(streak.lastActiveDate);

  if (isToday(lastActiveDate)) {
    return { isActive: true, isAtRisk: false, daysUntilLoss: 2 };
  }

  if (isYesterday(lastActiveDate)) {
    return { isActive: true, isAtRisk: true, daysUntilLoss: 1 };
  }

  return { isActive: false, isAtRisk: false, daysUntilLoss: 0 };
}
