import type { Question } from "./question";

export type LearnContentType = "text" | "image" | "diagram" | "tip" | "warning";

export interface LearnContent {
	id: string;
	type: LearnContentType;
	title?: string;
	content: string; // Main text content or description
	imageUrl?: string; // For image/diagram types
	component?: string; // For custom SVG components like "HandSignals"
	bulletPoints?: string[]; // For list-style content
	highlight?: string; // Key fact to remember
}

export interface Lesson {
	id: string;
	sectionId: string;
	order: number;
	title: string;
	description: string;
	type: "lesson" | "review" | "checkpoint";
	learnContent?: LearnContent[]; // Teaching slides before quiz
	questions: Question[];
	xpReward: number;
	requiredLessons?: string[];
}
