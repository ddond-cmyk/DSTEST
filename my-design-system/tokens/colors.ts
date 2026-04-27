// tokens/colors.ts
// 이 파일이 색상의 단일 진실(Single Source of Truth)입니다.
// 컴포넌트에서 색상을 직접 하드코딩하지 말고 이 토큰을 참조하세요.

export const primitiveColors = {
  white: "#FFFFFF",
  black: "#0A0A0A",

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
