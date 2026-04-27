// components/Modal/Modal.tsx

import React, { useEffect, useCallback } from "react";

// ─── Props Interface ──────────────────────────────────────────────────────────

export interface ModalProps {
  /** 모달 열림 상태 */
  isOpen: boolean;
  /** 닫기 핸들러 */
  onClose: () => void;
  /** 모달 제목 */
  title?: string;
  /** 모달 너비 */
  size?: "sm" | "md" | "lg" | "full";
  /** ESC 키로 닫기 */
  closeOnEsc?: boolean;
  /** 배경 클릭으로 닫기 */
  closeOnOverlayClick?: boolean;
  children: React.ReactNode;
  /** 하단 액션 영역 */
  footer?: React.ReactNode;
}

// ─── Style Maps ──────────────────────────────────────────────────────────────

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  full: "max-w-[calc(100vw-48px)]",
};

// ─── Component ───────────────────────────────────────────────────────────────

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = "md",
  closeOnEsc = true,
  closeOnOverlayClick = true,
  children,
  footer,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") onClose();
    },
    [closeOnEsc, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={[
          "relative w-full",
          sizeClasses[size],
          "bg-white dark:bg-zinc-900",
          "rounded-2xl",
          "shadow-2xl",
          "border border-gray-200/50 dark:border-zinc-700/50",
          "flex flex-col max-h-[calc(100vh-48px)]",
          "animate-in fade-in zoom-in-95 duration-200",
        ].join(" ")}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 dark:border-zinc-800">
            <h2
              id="modal-title"
              className="text-base font-semibold text-gray-900 dark:text-zinc-100"
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className={[
                "w-8 h-8 rounded-md flex items-center justify-center",
                "text-gray-400 hover:text-gray-600",
                "hover:bg-gray-100 dark:hover:bg-zinc-800",
                "transition-colors duration-150",
              ].join(" ")}
              aria-label="닫기"
            >
              <CloseIcon />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto flex-1 text-sm text-gray-700 dark:text-zinc-300">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 pb-6 pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

// ─── Icons ───────────────────────────────────────────────────────────────────

const CloseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);
