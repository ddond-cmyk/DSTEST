# Design System

> Minimal & Functional — Linear, Vercel, Notion 톤 기반의 디자인 시스템

---

## 🎨 Colors

### Primitive Tokens
| 이름 | 값 | 용도 |
|------|----|------|
| `color-white` | `#FFFFFF` | 기본 배경 |
| `color-black` | `#0A0A0A` | 기본 텍스트 |
| `color-gray-50` | `#FAFAFA` | 서브 배경 |
| `color-gray-100` | `#F4F4F5` | 비활성 배경 |
| `color-gray-200` | `#E4E4E7` | 구분선, 보더 |
| `color-gray-400` | `#A1A1AA` | 플레이스홀더 |
| `color-gray-600` | `#52525B` | 서브 텍스트 |
| `color-gray-900` | `#18181B` | 강조 텍스트 |
| `color-blue-500` | `#3B82F6` | Primary 액션 |
| `color-blue-600` | `#2563EB` | Primary hover |
| `color-red-500` | `#EF4444` | Error / Danger |
| `color-green-500` | `#22C55E` | Success |
| `color-yellow-500` | `#EAB308` | Warning |

### Semantic Tokens
| 이름 | 라이트 | 다크 |
|------|--------|------|
| `bg-default` | `color-white` | `#0A0A0A` |
| `bg-subtle` | `color-gray-50` | `#111111` |
| `bg-muted` | `color-gray-100` | `#1A1A1A` |
| `border-default` | `color-gray-200` | `#2A2A2A` |
| `text-primary` | `color-gray-900` | `#FAFAFA` |
| `text-secondary` | `color-gray-600` | `#A1A1AA` |
| `text-placeholder` | `color-gray-400` | `#52525B` |
| `accent-primary` | `color-blue-500` | `color-blue-500` |
| `accent-hover` | `color-blue-600` | `color-blue-600` |

---

## 📝 Typography

### Font Family
- **Display / Heading**: `Geist` (없으면 `DM Sans`)
- **Body**: `Geist` (sans-serif)
- **Code**: `Geist Mono`

### Type Scale
| Token | Size | Weight | Line Height | 용도 |
|-------|------|--------|-------------|------|
| `text-xs` | 11px | 400 | 1.5 | 캡션, 뱃지 |
| `text-sm` | 13px | 400 | 1.5 | 서브 텍스트, 레이블 |
| `text-base` | 14px | 400 | 1.6 | 본문 기본 |
| `text-md` | 15px | 500 | 1.5 | 강조 본문 |
| `text-lg` | 18px | 600 | 1.4 | 섹션 제목 |
| `text-xl` | 24px | 600 | 1.3 | 페이지 제목 |
| `text-2xl` | 32px | 700 | 1.2 | 히어로 제목 |
| `text-3xl` | 48px | 700 | 1.1 | 랜딩 대형 제목 |

---

## 📐 Spacing

4px 베이스 그리드 시스템.

| Token | 값 | Tailwind |
|-------|----|----------|
| `space-0` | 0px | `p-0` |
| `space-1` | 4px | `p-1` |
| `space-2` | 8px | `p-2` |
| `space-3` | 12px | `p-3` |
| `space-4` | 16px | `p-4` |
| `space-5` | 20px | `p-5` |
| `space-6` | 24px | `p-6` |
| `space-8` | 32px | `p-8` |
| `space-10` | 40px | `p-10` |
| `space-12` | 48px | `p-12` |
| `space-16` | 64px | `p-16` |

---

## 🔵 Border Radius

| Token | 값 | 용도 |
|-------|----|------|
| `radius-sm` | 4px | 인풋, 배지 |
| `radius-md` | 8px | 버튼, 카드 (기본) |
| `radius-lg` | 12px | 모달, 드롭다운 |
| `radius-xl` | 16px | 패널, 큰 카드 |
| `radius-full` | 9999px | 아바타, 토글 |

---

## 🌫 Shadow

| Token | 값 | 용도 |
|-------|----|------|
| `shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | 인풋 포커스 |
| `shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | 카드 기본 |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.10)` | 카드 hover |
| `shadow-lg` | `0 8px 24px rgba(0,0,0,0.12)` | 모달, 드롭다운 |
| `shadow-focus` | `0 0 0 3px rgba(59,130,246,0.25)` | 포커스 링 |

---

## 🧩 Component Patterns

### Button
- Size: `sm` / `md` / `lg`
- Variant: `primary` / `secondary` / `ghost` / `danger`
- 기본 radius: `radius-md`
- disabled: `opacity-50 cursor-not-allowed`

### Input
- 기본 border: `border-default`
- focus: `border-blue-500` + `shadow-focus`
- error: `border-red-500`
- radius: `radius-sm`

### Card
- padding: `space-6`
- border: `1px solid border-default`
- shadow: `shadow-sm` → hover: `shadow-md`
- radius: `radius-lg`

### Modal
- backdrop: `rgba(0,0,0,0.4)` blur
- panel radius: `radius-xl`
- shadow: `shadow-lg`
- max-width: `480px` (sm) / `640px` (md) / `800px` (lg)

---

## ✅ Do's & Don'ts

### ✅ Do
- 토큰 변수만 사용해서 색상, 간격, 타이포 정의
- 컴포넌트 내부에서 semantic token 참조
- 다크모드는 CSS 변수 오버라이드로 처리

### ❌ Don't
- `#3B82F6` 같은 hex 직접 하드코딩
- `style={{ marginTop: '17px' }}` 같은 임의 값
- `font-size: 13.5px` 같은 스케일 외 값
- 라이트/다크 각각 별도 컴포넌트 작성
