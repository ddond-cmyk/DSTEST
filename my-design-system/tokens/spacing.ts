// tokens/spacing.ts
// 4px 베이스 그리드. 모든 간격은 이 토큰만 사용.

export const spacing = {
  0: "0px",
  0.5: "2px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
} as const;

export const borderRadius = {
  none: "0px",
  sm: "4px",
  md: "8px",     // 기본 — 버튼, 인풋
  lg: "12px",    // 카드, 드롭다운
  xl: "16px",    // 모달, 큰 패널
  "2xl": "24px",
  full: "9999px", // 아바타, 토글, 필
} as const;

export const shadow = {
  none: "none",
  xs: "0 1px 2px rgba(0,0,0,0.05)",
  sm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
  md: "0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.06)",
  lg: "0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)",
  xl: "0 16px 48px rgba(0,0,0,0.14), 0 8px 16px rgba(0,0,0,0.08)",
  focus: "0 0 0 3px rgba(59,130,246,0.25)",
  focusDanger: "0 0 0 3px rgba(239,68,68,0.25)",
} as const;

export const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
  tooltip: 600,
} as const;

export const transition = {
  fast: "100ms ease",
  base: "150ms ease",
  slow: "250ms ease",
  spring: "200ms cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

// 컴포넌트 내부 패딩 — 버튼/인풋 등 사이즈 정의할 때
export const componentSize = {
  sm: { px: spacing[3], py: spacing[1], height: "28px" },
  md: { px: spacing[4], py: spacing[2], height: "36px" },
  lg: { px: spacing[5], py: spacing[3], height: "44px" },
} as const;

export type SpacingKey = keyof typeof spacing;
export type RadiusKey = keyof typeof borderRadius;
export type ShadowKey = keyof typeof shadow;
export type ComponentSizeKey = keyof typeof componentSize;
