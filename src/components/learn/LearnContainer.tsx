import { useState } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import type { LearnContent } from "../../types";
import { LearnSlide } from "./LearnSlide";

interface LearnContainerProps {
	lessonTitle: string;
	content: LearnContent[];
	onComplete: () => void;
	onExit: () => void;
}

export function LearnContainer({
	lessonTitle,
	content,
	onComplete,
	onExit,
}: LearnContainerProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const currentContent = content[currentIndex];
	const isFirst = currentIndex === 0;
	const isLast = currentIndex === content.length - 1;
	const progress = ((currentIndex + 1) / content.length) * 100;

	const handleNext = () => {
		if (isLast) {
			onComplete();
		} else {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const handlePrevious = () => {
		if (!isFirst) {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	return (
		<div className="min-h-screen bg-surface-50 flex flex-col">
			{/* Header */}
			<header className="sticky top-0 bg-white border-b border-surface-200 px-4 py-3 z-10">
				<div className="max-w-2xl mx-auto">
					<div className="flex items-center gap-4 mb-3">
						<button
							onClick={onExit}
							className="p-2 rounded-full hover:bg-surface-100 transition-colors"
							aria-label="Exit lesson"
						>
							<X className="w-6 h-6 text-zinc-500" />
						</button>

						<div className="flex-1">
							<p className="text-sm text-zinc-500">{lessonTitle}</p>
						</div>

						<span className="text-sm text-zinc-400">
							{currentIndex + 1} / {content.length}
						</span>
					</div>

					{/* Progress bar */}
					<div className="h-2 bg-surface-200 rounded-full overflow-hidden">
						<div
							className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-secondary-400 to-secondary-500"
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>
			</header>

			{/* Content area */}
			<main className="flex-1 px-4 py-8 pb-32">
				<div className="max-w-2xl mx-auto">
					<LearnSlide content={currentContent} />
				</div>
			</main>

			{/* Navigation footer */}
			<footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-surface-200 p-4">
				<div className="max-w-2xl mx-auto flex items-center gap-3">
					{/* Previous button */}
					<button
						onClick={handlePrevious}
						disabled={isFirst}
						className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-surface-200 text-zinc-500 hover:bg-surface-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
						aria-label="Previous"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					{/* Next / Continue button */}
					<button
						onClick={handleNext}
						className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors"
					>
						{isLast ? (
							<>
								Start Quiz
								<ChevronRight className="w-5 h-5" />
							</>
						) : (
							<>
								Got it
								<ChevronRight className="w-5 h-5" />
							</>
						)}
					</button>
				</div>
			</footer>
		</div>
	);
}
