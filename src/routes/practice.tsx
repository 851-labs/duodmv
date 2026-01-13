import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Target, Clock } from "lucide-react";
import { Header } from "../components/layout/Header";
import { BottomNav } from "../components/layout/BottomNav";

export const Route = createFileRoute("/practice")({
	component: PracticePage,
});

function PracticePage() {
	return (
		<div className="min-h-screen bg-surface-50 pb-20">
			<Header />

			<main className="max-w-2xl mx-auto px-4 py-6">
				{/* Back link */}
				<Link
					to="/"
					className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-700 mb-6"
				>
					<ChevronLeft className="w-5 h-5" />
					<span>Home</span>
				</Link>

				<div className="text-center py-12">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary-100 mb-6">
						<Target className="w-10 h-10 text-secondary-500" />
					</div>

					<h1 className="text-2xl font-bold text-zinc-900 mb-4">
						Practice Mode
					</h1>

					<p className="text-zinc-500 max-w-md mx-auto mb-8">
						Complete some lessons first to unlock practice mode. We'll use spaced
						repetition to help you review questions you found challenging.
					</p>

					<div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
						<Clock className="w-4 h-4" />
						<span>Coming soon</span>
					</div>

					<Link
						to="/learn"
						className="inline-block mt-8 px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
					>
						Start Learning
					</Link>
				</div>
			</main>

			<BottomNav />
		</div>
	);
}
