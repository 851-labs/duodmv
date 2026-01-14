import type { Lesson } from "../../types";

import { section1Lessons } from "./section-01-license";
import { section2Lessons } from "./section-02-permit";
import { section3Lessons } from "./section-03-testing";
import { section5Lessons } from "./section-05-intro-driving";
import { section6Lessons } from "./section-06-navigating";
import { section7Lessons } from "./section-07-laws-rules";
import { section8Lessons } from "./section-08-safe-driving";
import { section9Lessons } from "./section-09-alcohol-drugs";
import { section10Lessons } from "./section-10-financial";
import { section11Lessons } from "./section-11-registration";

export const allLessons: Lesson[] = [
  ...section1Lessons,
  ...section2Lessons,
  ...section3Lessons,
  ...section5Lessons,
  ...section6Lessons,
  ...section7Lessons,
  ...section8Lessons,
  ...section9Lessons,
  ...section10Lessons,
  ...section11Lessons,
];

export function getLessonsBySectionId(sectionId: string): Lesson[] {
  return allLessons.filter((lesson) => lesson.sectionId === sectionId);
}

export function getLessonById(lessonId: string): Lesson | undefined {
  return allLessons.find((lesson) => lesson.id === lessonId);
}

export function getNextLesson(sectionId: string, currentLessonId: string): Lesson | undefined {
  const sectionLessons = getLessonsBySectionId(sectionId).sort((a, b) => a.order - b.order);
  const currentIndex = sectionLessons.findIndex((l) => l.id === currentLessonId);
  return sectionLessons[currentIndex + 1];
}

export {
  section1Lessons,
  section2Lessons,
  section3Lessons,
  section5Lessons,
  section6Lessons,
  section7Lessons,
  section8Lessons,
  section9Lessons,
  section10Lessons,
  section11Lessons,
};
