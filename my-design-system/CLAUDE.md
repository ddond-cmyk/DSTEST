# CLAUDE.md — Design System Rules

이 파일은 Claude가 이 레포에서 작업할 때 **항상 먼저 읽어야 할 핵심 지침**입니다.

---

## 🎯 디자인 철학

- 톤: **Minimal & Functional** (Linear, Vercel, Notion 참고)
- 원칙: 과하지 않되, 디테일에 집착한다
- 다크/라이트 모두 지원, CSS 변수 기반

---

## 🚫 절대 규칙

1. 절대로 레포에 있는 토큰만 사용
2. 컴포넌트 Props를 분리해서 적용해
3. 색상은 반드시 `tokens/colors.ts`의 변수만 사용 — hex 직접 입력 금지
4. 커스텀 CSS 작성 금지 — Tailwind 유틸리티 클래스만 허용
5. `any` 타입 사용 금지 — 모든 Props는 TypeScript 인터페이스 정의
6. 인라인 스타일(`style={{}}`) 사용 금지

---

## ✅ 컴포넌트 생성 체크리스트

새 컴포넌트를 만들기 전에 반드시 순서대로 확인:

1. `tokens/` 폴더 열어서 사용 가능한 토큰 확인
2. `components/` 안에 유사한 컴포넌트가 있는지 확인
3. 가장 유사한 컴포넌트의 구조를 미러링 (특히 `Button.tsx` 참고)
4. `ComponentName.tsx` + `ComponentName.stories.tsx` 세트로 생성
5. Props 인터페이스는 파일 상단에 export

---

## ✅ 미리보기 등록 체크리스트

새 미리보기 카드를 등록할 때 반드시:

1. `group` 명시 — Type / Colors / Spacing / Components / Brand 중 하나
2. `subtitle` 명시 — 어떤 변형/축인지 한 줄로
3. `viewport` 명시 — 카드 크기에 맞춰 width/height
4. `asset` 이름 일관성 — `[Component] · [Axis]` 패턴 (예: `Button · Sizes`)

---

## 📐 컴포넌트 구조 패턴

```tsx
// 1. imports
// 2. Props 인터페이스 (export)
// 3. 컴포넌트 함수 (export default)
// 4. 내부 variant/size 맵핑 객체
```

기준 파일: `components/Button/Button.tsx`

---

## 🗂 파일 네이밍 규칙

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `DatePicker.tsx` |
| 토큰 | camelCase | `colors.ts` |
| 스토리 | `[컴포넌트].stories.tsx` | `Button.stories.tsx` |
| 훅 | `use` 접두사 | `useModal.ts` |

---

## 🔗 레퍼런스

- 디자인 토큰 상세: `design-system.md`
- 컴포넌트 기준: `components/Button/Button.tsx`
- 사용 예시: 각 컴포넌트의 `.stories.tsx`
