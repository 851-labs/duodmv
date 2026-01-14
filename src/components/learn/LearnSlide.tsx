import { Lightbulb, AlertTriangle } from "lucide-react";

import type { LearnContent } from "../../types";

import { HandSignalsDiagram } from "../diagrams/HandSignalsDiagram";

interface LearnSlideProps {
  content: LearnContent;
}

const diagramComponents: Record<string, React.ComponentType> = {
  HandSignals: HandSignalsDiagram,
};

export function LearnSlide({ content }: LearnSlideProps) {
  const DiagramComponent = content.component ? diagramComponents[content.component] : null;

  return (
    <div className="space-y-6">
      {/* Title */}
      {content.title && <h2 className="text-2xl font-bold text-zinc-900">{content.title}</h2>}

      {/* Main content text */}
      <p className="text-lg text-zinc-700 leading-relaxed">{content.content}</p>

      {/* Custom diagram component */}
      {DiagramComponent && (
        <div className="my-8">
          <DiagramComponent />
        </div>
      )}

      {/* Image */}
      {content.imageUrl && (
        <div className="flex justify-center my-6">
          <img
            src={content.imageUrl}
            alt={content.title || "Illustration"}
            className="max-w-full rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* Bullet points */}
      {content.bulletPoints && content.bulletPoints.length > 0 && (
        <ul className="space-y-3 my-6">
          {content.bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-medium">
                {index + 1}
              </span>
              <span className="text-zinc-700">{point}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tip box */}
      {content.type === "tip" && (
        <div className="flex items-start gap-3 p-4 bg-secondary-50 border-2 border-secondary-400 rounded-xl">
          <Lightbulb className="w-6 h-6 text-secondary-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-secondary-700">Tip</p>
            <p className="text-secondary-600">{content.content}</p>
          </div>
        </div>
      )}

      {/* Warning box */}
      {content.type === "warning" && (
        <div className="flex items-start gap-3 p-4 bg-streak-50 border-2 border-streak-400 rounded-xl">
          <AlertTriangle className="w-6 h-6 text-streak-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-streak-600">Important</p>
            <p className="text-streak-600">{content.content}</p>
          </div>
        </div>
      )}

      {/* Key highlight box */}
      {content.highlight && (
        <div className="flex items-start gap-3 p-4 bg-primary-50 border-2 border-primary-400 rounded-xl">
          <Lightbulb className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-primary-700">Remember</p>
            <p className="text-primary-600">{content.highlight}</p>
          </div>
        </div>
      )}
    </div>
  );
}
