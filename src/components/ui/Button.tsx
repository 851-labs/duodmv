import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

import { clsx } from "clsx";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "correct" | "incorrect" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: clsx(
    "bg-primary-500 text-white",
    "shadow-[0_4px_0_0_var(--color-primary-600)]",
    "hover:bg-primary-400 hover:shadow-[0_4px_0_0_var(--color-primary-500)]",
    "active:translate-y-1 active:shadow-none",
    "disabled:bg-surface-300 disabled:shadow-[0_4px_0_0_var(--color-surface-400)] disabled:text-surface-500",
  ),
  secondary: clsx(
    "bg-secondary-500 text-white",
    "shadow-[0_4px_0_0_var(--color-secondary-600)]",
    "hover:bg-secondary-400 hover:shadow-[0_4px_0_0_var(--color-secondary-500)]",
    "active:translate-y-1 active:shadow-none",
    "disabled:bg-surface-300 disabled:shadow-[0_4px_0_0_var(--color-surface-400)] disabled:text-surface-500",
  ),
  correct: clsx(
    "bg-correct-500 text-white",
    "shadow-[0_4px_0_0_var(--color-correct-600)]",
    "hover:bg-correct-400 hover:shadow-[0_4px_0_0_var(--color-correct-500)]",
    "active:translate-y-1 active:shadow-none",
  ),
  incorrect: clsx(
    "bg-incorrect-500 text-white",
    "shadow-[0_4px_0_0_var(--color-incorrect-600)]",
    "hover:bg-incorrect-400 hover:shadow-[0_4px_0_0_var(--color-incorrect-500)]",
    "active:translate-y-1 active:shadow-none",
  ),
  outline: clsx(
    "bg-white text-zinc-700",
    "border-2 border-surface-300",
    "shadow-[0_2px_0_0_var(--color-surface-300)]",
    "hover:bg-surface-50 hover:border-surface-400 hover:shadow-[0_2px_0_0_var(--color-surface-400)]",
    "active:translate-y-0.5 active:shadow-none",
    "disabled:bg-surface-50 disabled:border-surface-200 disabled:text-surface-300 disabled:shadow-[0_2px_0_0_var(--color-surface-200)]",
  ),
  ghost: clsx("bg-transparent text-zinc-600", "hover:bg-surface-100", "active:bg-surface-200"),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-2xl",
};

export const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    icon,
    iconPosition = "left",
    className,
    disabled,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={clsx(
        "font-bold transition-all duration-100",
        "flex items-center justify-center gap-2",
        "disabled:cursor-not-allowed disabled:active:translate-y-0",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
});
