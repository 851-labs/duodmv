import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

import { clsx } from "clsx";
import { forwardRef } from "react";

type OptionState = "default" | "selected" | "correct" | "incorrect" | "disabled";

interface OptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  state?: OptionState;
  optionLabel?: string;
}

const stateStyles: Record<OptionState, string> = {
  default: clsx(
    "bg-white text-zinc-700",
    "border-2 border-surface-300",
    "shadow-[0_2px_0_0_var(--color-surface-300)]",
    "hover:bg-surface-50 hover:border-surface-400 hover:shadow-[0_2px_0_0_var(--color-surface-400)]",
    "active:translate-y-0.5 active:shadow-none",
  ),
  selected: clsx(
    "bg-sky-50 text-sky-700",
    "border-2 border-sky-400",
    "shadow-[0_2px_0_0_#38bdf8]",
    "hover:bg-sky-100",
  ),
  correct: clsx(
    "bg-primary-100 text-primary-700",
    "border-2 border-primary-500",
    "shadow-[0_2px_0_0_var(--color-primary-500)]",
  ),
  incorrect: clsx(
    "bg-red-100 text-red-700",
    "border-2 border-red-500",
    "shadow-[0_2px_0_0_#ef4444]",
  ),
  disabled: clsx(
    "bg-surface-100 text-surface-400",
    "border-2 border-surface-200",
    "shadow-[0_2px_0_0_var(--color-surface-200)]",
    "cursor-not-allowed",
  ),
};

export const OptionButton = forwardRef(function OptionButton(
  {
    children,
    state = "default",
    optionLabel,
    className,
    disabled,
    ...props
  }: OptionButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  // Only override to "disabled" styling if state is default/selected
  // Respect correct/incorrect states even when disabled (for showing answer feedback)
  const effectiveState =
    disabled && state !== "correct" && state !== "incorrect" ? "disabled" : state;

  return (
    <button
      ref={ref}
      className={clsx(
        "w-full p-4 text-left rounded-xl transition-all duration-100",
        "font-semibold",
        "flex items-center gap-3",
        stateStyles[effectiveState],
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {optionLabel && (
        <span
          className={clsx(
            "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0",
            effectiveState === "default" && "bg-surface-200 text-zinc-600",
            effectiveState === "selected" && "bg-sky-500 text-white",
            effectiveState === "correct" && "bg-primary-500 text-white",
            effectiveState === "incorrect" && "bg-red-500 text-white",
            effectiveState === "disabled" && "bg-surface-200 text-surface-400",
          )}
        >
          {optionLabel}
        </span>
      )}
      <span className="flex-1">{children}</span>
    </button>
  );
});
