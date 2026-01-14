import { useState, useCallback, useEffect } from "react";
import { X } from "lucide-react";
import type { Lesson, Question } from "../../types";
import { MultipleChoice } from "./MultipleChoice";
import { TrueFalse } from "./TrueFalse";
import { QuestionFeedback } from "./QuestionFeedback";
import { QuizProgress } from "./QuizProgress";
import { LessonComplete } from "../gamification/LessonComplete";
import { calculateLessonXp } from "../../lib/xp";

interface QuizContainerProps {
	lesson: Lesson;
	onComplete: (score: number, xpEarned: number) => void;
	onExit: () => void;
	streakDays: number;
}

interface QuizState {
	currentIndex: number;
	answers: Array<{ questionId: string; isCorrect: boolean }>;
	showFeedback: boolean;
	lastAnswerCorrect: boolean;
	isComplete: boolean;
}

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

export function QuizContainer({
	lesson,
	onComplete,
	onExit,
	streakDays,
}: QuizContainerProps) {
	// Don't shuffle during SSR to avoid hydration mismatch
	// Start with original order, shuffle after mount
	const [questions, setQuestions] = useState<Question[]>(lesson.questions);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		setQuestions(shuffleArray(lesson.questions));
		setIsReady(true);
	}, [lesson.questions]);

	const [state, setState] = useState<QuizState>({
		currentIndex: 0,
		answers: [],
		showFeedback: false,
		lastAnswerCorrect: false,
		isComplete: false,
	});

	const currentQuestion = questions[state.currentIndex];
	const correctCount = state.answers.filter((a) => a.isCorrect).length;

	const handleAnswer = useCallback(
		(isCorrect: boolean) => {
			setState((prev) => ({
				...prev,
				answers: [
					...prev.answers,
					{ questionId: currentQuestion.id, isCorrect },
				],
				showFeedback: true,
				lastAnswerCorrect: isCorrect,
			}));
		},
		[currentQuestion]
	);

	const handleContinue = useCallback(() => {
		const isLastQuestion = state.currentIndex >= questions.length - 1;

		if (isLastQuestion) {
			setState((prev) => ({
				...prev,
				showFeedback: false,
				isComplete: true,
			}));
		} else {
			setState((prev) => ({
				...prev,
				currentIndex: prev.currentIndex + 1,
				showFeedback: false,
			}));
		}
	}, [state.currentIndex, questions.length]);

	const handleLessonComplete = useCallback(() => {
		const totalQuestions = questions.length;
		const finalCorrectCount = state.answers.filter((a) => a.isCorrect).length;
		const accuracy = Math.round((finalCorrectCount / totalQuestions) * 100);
		const isPerfect = finalCorrectCount === totalQuestions;

		const xpEarned = calculateLessonXp(
			lesson.xpReward,
			accuracy,
			isPerfect,
			streakDays
		);

		onComplete(accuracy, xpEarned);
	}, [questions.length, state.answers, lesson.xpReward, streakDays, onComplete]);

	// Show loading while shuffling to prevent hydration mismatch
	if (!isReady) {
		return (
			<div className="min-h-screen bg-surface-50 flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-500 border-t-transparent mx-auto mb-4" />
					<p className="text-zinc-500">Loading questions...</p>
				</div>
			</div>
		);
	}

	// Show completion screen
	if (state.isComplete) {
		const totalQuestions = questions.length;
		const finalCorrectCount = state.answers.filter((a) => a.isCorrect).length;
		const accuracy = Math.round((finalCorrectCount / totalQuestions) * 100);
		const isPerfect = finalCorrectCount === totalQuestions;
		const xpEarned = calculateLessonXp(
			lesson.xpReward,
			accuracy,
			isPerfect,
			streakDays
		);

		return (
			<LessonComplete
				lessonTitle={lesson.title}
				accuracy={accuracy}
				xpEarned={xpEarned}
				isPerfect={isPerfect}
				onContinue={handleLessonComplete}
			/>
		);
	}

	const renderQuestion = (question: Question) => {
		switch (question.type) {
			case "multiple-choice":
				return (
					<MultipleChoice
						key={question.id}
						question={question}
						onAnswer={handleAnswer}
						disabled={state.showFeedback}
					/>
				);
			case "true-false":
				return (
					<TrueFalse
						key={question.id}
						question={question}
						onAnswer={handleAnswer}
						disabled={state.showFeedback}
					/>
				);
			default:
				return <div>Unknown question type</div>;
		}
	};

	return (
		<div className="min-h-screen bg-surface-50 flex flex-col">
			{/* Header */}
			<header className="sticky top-0 bg-white border-b border-surface-200 px-4 py-3 z-10">
				<div className="max-w-2xl mx-auto flex items-center gap-4">
					<button
						onClick={onExit}
						className="p-2 rounded-full hover:bg-surface-100 transition-colors"
						aria-label="Exit quiz"
					>
						<X className="w-6 h-6 text-zinc-500" />
					</button>

					<div className="flex-1">
						<QuizProgress
							current={state.currentIndex}
							total={questions.length}
							correctCount={correctCount}
						/>
					</div>
				</div>
			</header>

			{/* Question area */}
			<main className="flex-1 px-4 py-8 pb-32">
				<div className="max-w-2xl mx-auto">
					{renderQuestion(currentQuestion)}
				</div>
			</main>

			{/* Feedback overlay */}
			{state.showFeedback && (
				<QuestionFeedback
					question={currentQuestion}
					isCorrect={state.lastAnswerCorrect}
					onContinue={handleContinue}
				/>
			)}
		</div>
	);
}
