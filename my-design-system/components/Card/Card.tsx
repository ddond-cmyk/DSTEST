// components/Card/Card.tsx

import React from "react";

// ─── Props Interface ──────────────────────────────────────────────────────────

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 패딩 크기 */
  padding?: "none" | "sm" | "md" | "lg";
  /** hover 효과 (그림자 + 살짝 올라오는 효과) */
  hoverable?: boolean;
  /** 클릭 가능한 카드 */
  clickable?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

// ─── Components ──────────────────────────────────────────────────────────────

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      padding = "md",
      hoverable = false,
      clickable = false,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "bg-white dark:bg-zinc-900",
          "border border-gray-200 dark:border-zinc-800",
          "rounded-xl",
          "shadow-sm",
          hoverable
            ? "transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            : "",
          clickable
            ? "cursor-pointer active:scale-[0.99] transition-transform duration-100"
            : "",
          paddingClasses[padding],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// ─── Card.Header ─────────────────────────────────────────────────────────────

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`pb-4 mb-4 border-b border-gray-100 dark:border-zinc-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
CardHeader.displayName = "Card.Header";

// ─── Card.Body ───────────────────────────────────────────────────────────────

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={`text-sm text-gray-600 dark:text-zinc-400 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardBody.displayName = "Card.Body";

// ─── Card.Footer ─────────────────────────────────────────────────────────────

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`pt-4 mt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-end gap-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = "Card.Footer";

// ─── Compound Component ──────────────────────────────────────────────────────

export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
