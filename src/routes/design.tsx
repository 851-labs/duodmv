import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, AlertTriangle, Info } from "lucide-react";
import { Button } from "../components/ui/Button";
import { OptionButton } from "../components/ui/OptionButton";

export const Route = createFileRoute("/design")({
	component: DesignPage,
});

function DesignPage() {
	return (
		<div className="min-h-screen bg-surface-50 py-8">
			<div className="max-w-2xl mx-auto px-4 space-y-12">
				<h1 className="text-3xl font-bold text-zinc-900">Design System</h1>

				{/* Buttons */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold text-zinc-900">Buttons</h2>
					<div className="flex flex-wrap gap-4">
						<Button variant="primary">Primary</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="correct">Correct</Button>
						<Button variant="incorrect">Incorrect</Button>
					</div>
					<div className="flex flex-wrap gap-4">
						<Button variant="primary" disabled>Disabled</Button>
						<Button variant="outline" disabled>Disabled</Button>
					</div>
					<div className="flex flex-wrap gap-4">
						<Button variant="primary" size="sm">Small</Button>
						<Button variant="primary" size="md">Medium</Button>
						<Button variant="primary" size="lg">Large</Button>
					</div>
				</section>

				{/* Option Buttons */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold text-zinc-900">Option Buttons</h2>
					<div className="space-y-3">
						<OptionButton optionLabel="A" state="default" onClick={() => {}}>
							Default option
						</OptionButton>
						<OptionButton optionLabel="B" state="selected" onClick={() => {}}>
							Selected option
						</OptionButton>
						<OptionButton optionLabel="C" state="correct" onClick={() => {}}>
							Correct answer
						</OptionButton>
						<OptionButton optionLabel="D" state="incorrect" onClick={() => {}}>
							Incorrect answer
						</OptionButton>
						<OptionButton optionLabel="E" state="disabled" disabled onClick={() => {}}>
							Disabled option
						</OptionButton>
					</div>
				</section>

				{/* Admonitions */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold text-zinc-900">Admonitions</h2>

					{/* Remember/Highlight */}
					<div className="flex items-start gap-3 p-4 bg-primary-50 border-2 border-primary-400 rounded-xl">
						<Lightbulb className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
						<div>
							<p className="font-medium text-primary-700">Remember</p>
							<p className="text-primary-600">
								This is a key point to remember from the lesson.
							</p>
						</div>
					</div>

					{/* Tip */}
					<div className="flex items-start gap-3 p-4 bg-secondary-50 border-2 border-secondary-400 rounded-xl">
						<Info className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5" />
						<div>
							<p className="font-medium text-secondary-700">Tip</p>
							<p className="text-secondary-600">This is a helpful tip for the learner.</p>
						</div>
					</div>

					{/* Warning */}
					<div className="flex items-start gap-3 p-4 bg-streak-50 border-2 border-streak-400 rounded-xl">
						<AlertTriangle className="w-6 h-6 text-streak-500 flex-shrink-0 mt-0.5" />
						<div>
							<p className="font-medium text-streak-600">Important</p>
							<p className="text-streak-600">This is an important warning to pay attention to.</p>
						</div>
					</div>
				</section>

				{/* Cards */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold text-zinc-900">Cards</h2>

					<div className="bg-white rounded-xl p-4 border-2 border-surface-200 shadow-[0_2px_0_0_var(--color-surface-200)]">
						<p className="font-semibold text-zinc-900">Default Card</p>
						<p className="text-sm text-zinc-500">With 3D border effect</p>
					</div>

					<div className="bg-primary-50 rounded-xl p-4 border-2 border-primary-400 shadow-[0_2px_0_0_var(--color-primary-400)]">
						<p className="font-semibold text-primary-700">Completed Card</p>
						<p className="text-sm text-primary-600">Success state styling</p>
					</div>
				</section>

				{/* Colors */}
				<section className="space-y-4">
					<h2 className="text-xl font-semibold text-zinc-900">Colors</h2>

					<div className="grid grid-cols-5 gap-2">
						<div className="space-y-2">
							<p className="text-xs font-medium text-zinc-500">Primary</p>
							<div className="h-10 rounded bg-primary-50"></div>
							<div className="h-10 rounded bg-primary-100"></div>
							<div className="h-10 rounded bg-primary-200"></div>
							<div className="h-10 rounded bg-primary-300"></div>
							<div className="h-10 rounded bg-primary-400"></div>
							<div className="h-10 rounded bg-primary-500"></div>
							<div className="h-10 rounded bg-primary-600"></div>
							<div className="h-10 rounded bg-primary-700"></div>
						</div>
						<div className="space-y-2">
							<p className="text-xs font-medium text-zinc-500">Secondary</p>
							<div className="h-10 rounded bg-secondary-50"></div>
							<div className="h-10 rounded bg-secondary-100"></div>
							<div className="h-10 rounded bg-secondary-200"></div>
							<div className="h-10 rounded bg-secondary-300"></div>
							<div className="h-10 rounded bg-secondary-400"></div>
							<div className="h-10 rounded bg-secondary-500"></div>
							<div className="h-10 rounded bg-secondary-600"></div>
							<div className="h-10 rounded bg-secondary-700"></div>
						</div>
						<div className="space-y-2">
							<p className="text-xs font-medium text-zinc-500">Correct</p>
							<div className="h-10 rounded bg-correct-50"></div>
							<div className="h-10 rounded bg-correct-100"></div>
							<div className="h-10 rounded bg-correct-400"></div>
							<div className="h-10 rounded bg-correct-500"></div>
							<div className="h-10 rounded bg-correct-600"></div>
							<div className="h-10 rounded bg-correct-700"></div>
						</div>
						<div className="space-y-2">
							<p className="text-xs font-medium text-zinc-500">Incorrect</p>
							<div className="h-10 rounded bg-incorrect-50"></div>
							<div className="h-10 rounded bg-incorrect-100"></div>
							<div className="h-10 rounded bg-incorrect-400"></div>
							<div className="h-10 rounded bg-incorrect-500"></div>
							<div className="h-10 rounded bg-incorrect-600"></div>
							<div className="h-10 rounded bg-incorrect-700"></div>
						</div>
						<div className="space-y-2">
							<p className="text-xs font-medium text-zinc-500">Streak</p>
							<div className="h-10 rounded bg-streak-400"></div>
							<div className="h-10 rounded bg-streak-500"></div>
							<div className="h-10 rounded bg-streak-600"></div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
