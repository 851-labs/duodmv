export type QuestionType = "multiple-choice" | "true-false";

export interface BaseQuestion {
	id: string;
	type: QuestionType;
	sectionId: string;
	lessonId: string;
	difficulty: 1 | 2 | 3;
	xpValue: number;
	explanation: string;
	handbookReference?: string;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
	type: "multiple-choice";
	question: string;
	options: string[];
	correctIndex: number;
	imageUrl?: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
	type: "true-false";
	statement: string;
	isTrue: boolean;
}

export type Question = MultipleChoiceQuestion | TrueFalseQuestion;
