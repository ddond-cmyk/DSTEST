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
