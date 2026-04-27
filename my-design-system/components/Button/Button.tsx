// components/Button/Button.tsx
// 기준 컴포넌트 — 모든 새 컴포넌트는 이 구조를 미러링합니다.

import React from "react";

// ─── Props Interface ─────────────────────────────────────────────────────────

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 스타일 변형 */
  variant?: "primary" | "secondary" | "ghost" | "danger";
  /** 버튼 크기 */
  size?: "sm" | "md" | "lg";
  /** 로딩 상태 */
  isLoading?: boolean;
  /** 아이콘 (왼쪽) */
  leftIcon?: React.ReactNode;
  /** 아이콘 (오른쪽) */
  rightIcon?: React.ReactNode;
  /** 전체 너비 */
  fullWidth?: boolean;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: [
    "bg-blue-500 text-white",
    "hover:bg-blue-600",
    "active:bg-blue-700",
    "disabled:bg-blue-300",
    "dark:hover:bg-blue-400",
  ].join(" "),

  secondary: [
    "bg-white text-gray-900 border border-gray-200",
    "hover:bg-gray-50 hover:border-gray-300",
    "active:bg-gray-100",
    "disabled:text-gray-400 disabled:border-gray-100",
    "dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700",
    "dark:hover:bg-zinc-800",
  ].join(" "),

  ghost: [
    "bg-transparent text-gray-600",
    "hover:bg-gray-100 hover:text-gray-900",
    "active:bg-gray-200",
    "disabled:text-gray-300",
    "dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100",
  ].join(" "),

  danger: [
    "bg-red-500 text-white",
    "hover:bg-red-600",
    "active:bg-red-700",
    "disabled:bg-red-300",
  ].join(" "),
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-7 px-3 text-xs rounded",
  md: "h-9 px-4 text-sm rounded-md",
  lg: "h-11 px-5 text-base rounded-md",
};

// ─── Component ───────────────────────────────────────────────────────────────

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    const baseClasses = [
      "inline-flex items-center justify-center gap-2",
      "font-medium leading-none",
      "transition-all duration-150",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "select-none cursor-pointer",
      fullWidth ? "w-full" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={[
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner size={size} />
            {children}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="shrink-0 flex items-center">{leftIcon}</span>
            )}
            {children}
            {rightIcon && (
              <span className="shrink-0 flex items-center">{rightIcon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

// ─── Sub-components ──────────────────────────────────────────────────────────

function LoadingSpinner({ size }: { size: ButtonProps["size"] }) {
  const sizeMap = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };
  return (
    <svg
      className={`animate-spin ${sizeMap[size ?? "md"]} opacity-70`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
