// components/Input/Input.tsx

import React from "react";

// ─── Props Interface ──────────────────────────────────────────────────────────

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** 인풋 크기 */
  size?: "sm" | "md" | "lg";
  /** 레이블 */
  label?: string;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 힌트 텍스트 */
  hint?: string;
  /** 왼쪽 아이콘/요소 */
  leftElement?: React.ReactNode;
  /** 오른쪽 아이콘/요소 */
  rightElement?: React.ReactNode;
  /** 전체 너비 (기본 true) */
  fullWidth?: boolean;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const sizeClasses = {
  sm: "h-7 px-3 text-xs",
  md: "h-9 px-3 text-sm",
  lg: "h-11 px-4 text-base",
};

// ─── Component ───────────────────────────────────────────────────────────────

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      label,
      errorMessage,
      hint,
      leftElement,
      rightElement,
      fullWidth = true,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    const hasError = Boolean(errorMessage);

    return (
      <div className={`flex flex-col gap-1.5 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700 dark:text-zinc-300"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftElement && (
            <span className="absolute left-3 flex items-center text-gray-400">
              {leftElement}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={[
              "w-full rounded bg-white dark:bg-zinc-900",
              "border transition-all duration-150",
              "text-gray-900 dark:text-zinc-100",
              "placeholder:text-gray-400 dark:placeholder:text-zinc-600",
              "outline-none",
              hasError
                ? "border-red-500 focus:ring-2 focus:ring-red-500/25"
                : [
                    "border-gray-200 dark:border-zinc-700",
                    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/25",
                  ].join(" "),
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 dark:disabled:bg-zinc-800",
              leftElement ? "pl-9" : "",
              rightElement ? "pr-9" : "",
              sizeClasses[size],
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            {...props}
          />

          {rightElement && (
            <span className="absolute right-3 flex items-center text-gray-400">
              {rightElement}
            </span>
          )}
        </div>

        {hasError ? (
          <p className="text-xs text-red-500">{errorMessage}</p>
        ) : hint ? (
          <p className="text-xs text-gray-400 dark:text-zinc-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
