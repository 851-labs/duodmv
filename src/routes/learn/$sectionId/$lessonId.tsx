import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { QuizContainer } from "../../../components/quiz/QuizContainer";
import { LearnContainer } from "../../../components/learn/LearnContainer";
import { useProgress } from "../../../store/progress-context";
import { getLessonById, getSectionById } from "../../../data";

export const Route = createFileRoute("/learn/$sectionId/$lessonId")({
	component: LessonPage,
});

type LessonPhase = "learn" | "quiz";

function LessonPage() {
	const { sectionId, lessonId } = Route.useParams();
	const navigate = useNavigate();
	const { completeLesson, getStreak, startLesson } = useProgress();

	const lesson = getLessonById(lessonId);
	const section = getSectionById(sectionId);

	// Determine initial phase based on whether lesson has learn content
	const hasLearnContent = lesson?.learnContent && lesson.learnContent.length > 0;
	const [phase, setPhase] = useState<LessonPhase>(hasLearnContent ? "learn" : "quiz");

	// Start the lesson on mount
	useEffect(() => {
		if (lesson && section) {
			startLesson(sectionId, lessonId);
		}
	}, [lesson, section, sectionId, lessonId, startLesson]);

	if (!lesson || !section) {
		return (
			<div className="min-h-screen bg-surface-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-xl font-bold text-zinc-900">Lesson not found</h1>
					<button
						onClick={() => navigate({ to: "/learn" })}
						className="text-primary-600 mt-2"
					>
						Back to sections
					</button>
				</div>
			</div>
		);
	}

	const handleLearnComplete = () => {
		setPhase("quiz");
	};

	const handleQuizComplete = (score: number, xpEarned: number) => {
		completeLesson(sectionId, lessonId, score, xpEarned);
		navigate({
			to: "/learn/$sectionId",
			params: { sectionId },
		});
	};

	const handleExit = () => {
		navigate({
			to: "/learn/$sectionId",
			params: { sectionId },
		});
	};

	// Show learn content first if available
	if (phase === "learn" && lesson.learnContent) {
		return (
			<LearnContainer
				lessonTitle={lesson.title}
				content={lesson.learnContent}
				onComplete={handleLearnComplete}
				onExit={handleExit}
			/>
		);
	}

	// Show quiz
	return (
		<QuizContainer
			lesson={lesson}
			onComplete={handleQuizComplete}
			onExit={handleExit}
			streakDays={getStreak()}
		/>
	);
}
