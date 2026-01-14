import { differenceInMinutes, parseISO } from "date-fns";

import type { HeartsData } from "../types";

const REFILL_INTERVAL_MINUTES = 30;

export function calculateCurrentHearts(hearts: HeartsData): HeartsData {
  // Check for unlimited hearts
  if (hearts.unlimitedUntil) {
    const unlimitedEnd = parseISO(hearts.unlimitedUntil);
    if (new Date() < unlimitedEnd) {
      return { ...hearts, current: hearts.maxHearts };
    }
  }

  // Calculate refilled hearts based on time passed
  const lastRefill = parseISO(hearts.lastRefillTime);
  const minutesPassed = differenceInMinutes(new Date(), lastRefill);
  const heartsToAdd = Math.floor(minutesPassed / REFILL_INTERVAL_MINUTES);

  if (heartsToAdd > 0 && hearts.current < hearts.maxHearts) {
    const newHearts = Math.min(hearts.current + heartsToAdd, hearts.maxHearts);
    return {
      ...hearts,
      current: newHearts,
      lastRefillTime: new Date().toISOString(),
    };
  }

  return hearts;
}

export function useHeart(hearts: HeartsData): HeartsData | null {
  const updated = calculateCurrentHearts(hearts);

  if (updated.current <= 0) {
    return null;
  }

  return {
    ...updated,
    current: updated.current - 1,
    lastRefillTime:
      updated.current === updated.maxHearts ? new Date().toISOString() : updated.lastRefillTime,
  };
}

export function getTimeUntilNextHeart(hearts: HeartsData): number | null {
  if (hearts.current >= hearts.maxHearts) {
    return null;
  }

  const lastRefill = parseISO(hearts.lastRefillTime);
  const minutesPassed = differenceInMinutes(new Date(), lastRefill);
  const minutesUntilNext = REFILL_INTERVAL_MINUTES - (minutesPassed % REFILL_INTERVAL_MINUTES);

  return minutesUntilNext;
}

export function refillAllHearts(hearts: HeartsData): HeartsData {
  return {
    ...hearts,
    current: hearts.maxHearts,
    lastRefillTime: new Date().toISOString(),
  };
}
