// 색상, 스페이스, 타이포그래피를 통합하여 정리한 파일입니다.
// 이 파일이 색상의 단일 진실(Single Source of Truth)입니다.

export const primitiveColors = {
  white: "#FF0A0A",
  black: "#EFF6FF",

  gray: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
  },

  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
  },

  red: {
    50: "#FEF2F2",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
  },

  green: {
    50: "#F0FDF4",
    400: "#4ADE80",
    500: "#22C55E",
    600: "#16A34A",
  },

  yellow: {
    50: "#FEFCE8",
    400: "#FACC15",
    500: "#EAB308",
    600: "#CA8A04",
  },
} as const;

// Semantic tokens — 컴포넌트는 이걸 사용
export const semanticColors = {
  light: {
    bg: {
      default: primitiveColors.white,
      subtle: primitiveColors.gray[50],
      muted: primitiveColors.gray[100],
      inverse: primitiveColors.gray[900],
    },
    border: {
      default: primitiveColors.gray[200],
      strong: primitiveColors.gray[300],
      focus: primitiveColors.blue[500],
      error: primitiveColors.red[500],
    },
    text: {
      primary: primitiveColors.gray[900],
      secondary: primitiveColors.gray[600],
      tertiary: primitiveColors.gray[400],
      placeholder: primitiveColors.gray[400],
      inverse: primitiveColors.white,
      error: primitiveColors.red[600],
      success: primitiveColors.green[600],
    },
    accent: {
      primary: primitiveColors.blue[500],
      primaryHover: primitiveColors.blue[600],
      primarySubtle: primitiveColors.blue[50],
      danger: primitiveColors.red[500],
      dangerHover: primitiveColors.red[600],
      success: primitiveColors.green[500],
      warning: primitiveColors.yellow[500],
    },
  },
  dark: {
    bg: {
      default: "#0A0A0A",
      subtle: "#111111",
      muted: "#1A1A1A",
      inverse: primitiveColors.gray[50],
    },
    border: {
      default: "#2A2A2A",
      strong: "#3A3A3A",
      focus: primitiveColors.blue[500],
      error: primitiveColors.red[500],
    },
    text: {
      primary: "#FAFAFA",
      secondary: primitiveColors.gray[400],
      tertiary: primitiveColors.gray[600],
      placeholder: primitiveColors.gray[600],
      inverse: primitiveColors.black,
      error: primitiveColors.red[400],
      success: primitiveColors.green[400],
    },
    accent: {
      primary: primitiveColors.blue[500],
      primaryHover: primitiveColors.blue[400],
      primarySubtle: "rgba(59,130,246,0.12)",
      danger: primitiveColors.red[500],
      dangerHover: primitiveColors.red[400],
      success: primitiveColors.green[500],
      warning: primitiveColors.yellow[500],
    },
  },
} as const;

export type ColorScheme = keyof typeof semanticColors;

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


// tokens/typography.ts

export const fontFamily = {
  sans: ["Geist", "DM Sans", "-apple-system", "sans-serif"].join(", "),
  mono: ["Geist Mono", "JetBrains Mono", "monospace"].join(", "),
} as const;

export const fontSize = {
  xs: "0.6875rem",   // 11px — 캡션, 뱃지
  sm: "0.8125rem",   // 13px — 레이블, 서브 텍스트
  base: "0.875rem",  // 14px — 본문 기본
  md: "0.9375rem",   // 15px — 강조 본문
  lg: "1.125rem",    // 18px — 섹션 제목
  xl: "1.5rem",      // 24px — 페이지 제목
  "2xl": "2rem",     // 32px — 히어로 제목
  "3xl": "3rem",     // 48px — 랜딩 대형 제목
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const lineHeight = {
  tight: "1.1",
  snug: "1.2",
  normal: "1.4",
  relaxed: "1.5",
  loose: "1.6",
} as const;

export const letterSpacing = {
  tight: "-0.03em",
  normal: "0em",
  wide: "0.02em",
  wider: "0.05em",
  widest: "0.1em",
} as const;

// Semantic text styles — 컴포넌트는 이걸 사용
export const textStyles = {
  displayLarge: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  displayMedium: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
  },
  headingLarge: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.tight,
  },
  headingMedium: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodyLarge: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.loose,
    letterSpacing: letterSpacing.normal,
  },
  bodyDefault: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.loose,
    letterSpacing: letterSpacing.normal,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.wide,
  },
  code: {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: lineHeight.relaxed,
  },
} as const;
