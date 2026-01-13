import type { Lesson } from "../../types";
import { section5Lessons } from "./section-05-intro-driving";
import { section7Lessons } from "./section-07-laws-rules";
import { section9Lessons } from "./section-09-alcohol-drugs";

export const allLessons: Lesson[] = [
	...section5Lessons,
	...section7Lessons,
	...section9Lessons,
];

export function getLessonsBySectionId(sectionId: string): Lesson[] {
	return allLessons.filter((lesson) => lesson.sectionId === sectionId);
}

export function getLessonById(lessonId: string): Lesson | undefined {
	return allLessons.find((lesson) => lesson.id === lessonId);
}

export function getNextLesson(sectionId: string, currentLessonId: string): Lesson | undefined {
	const sectionLessons = getLessonsBySectionId(sectionId).sort(
		(a, b) => a.order - b.order
	);
	const currentIndex = sectionLessons.findIndex((l) => l.id === currentLessonId);
	return sectionLessons[currentIndex + 1];
}

export { section5Lessons, section7Lessons, section9Lessons };
