# my-design-system

> Minimal & Functional 디자인 시스템 — Claude와 함께 일관된 컴포넌트를 만들기 위한 단일 진실(Single Source of Truth)

---

## 목적

이 레포는 두 가지 역할을 합니다:

1. **컴포넌트 라이브러리** — 재사용 가능한 UI 컴포넌트
2. **Claude 컨텍스트 소스** — Claude Projects에 이 파일들을 올려두면, 모든 대화에서 자동으로 일관된 디자인이 적용됨

---

## Claude와 연결하는 방법

### 방법 A: claude.ai Projects 사용
```
1. claude.ai → Projects → 새 프로젝트 생성
2. 아래 3개 파일 업로드:
   - CLAUDE.md
   - design-system.md
   - components/Button/Button.tsx (기준 컴포넌트)
3. Project Instructions에 추가:
   "모든 컴포넌트는 업로드된 CLAUDE.md와 design-system.md를 따를 것"
```

### 방법 B: Claude Code 사용
```bash
# 이 레포를 clone한 폴더에서 claude 실행
git clone https://github.com/your-name/my-design-system
cd my-design-system
claude
# CLAUDE.md가 자동으로 로드됨
```

### 방법 C: URL로 직접 참조
```
Claude에게: "https://github.com/your-name/my-design-system/blob/main/CLAUDE.md 와
components/Button/Button.tsx 패턴으로 DatePicker 만들어줘"
```

---

## 구조

```
my-design-system/
│
├── CLAUDE.md              ← Claude에게 주는 핵심 지침 (가장 중요)
├── design-system.md       ← 디자인 토큰 + 규칙 상세 문서
│
├── tokens/
│   ├── colors.ts          ← 색상 토큰 (Primitive + Semantic)
│   ├── typography.ts      ← 폰트 토큰 + Text Styles
│   └── spacing.ts         ← 간격, 반지름, 그림자, z-index
│
├── components/
│   ├── Button/
│   │   ├── Button.tsx         ← 기준 컴포넌트 (모든 컴포넌트의 패턴 기준)
│   │   └── Button.stories.tsx ← 사용 예시
│   ├── Input/
│   │   └── Input.tsx
│   ├── Card/
│   │   └── Card.tsx
│   └── Modal/
│       └── Modal.tsx
│
└── README.md
```

---

## 기술 스택

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS
- **다크모드**: Tailwind `dark:` 접두사 (class 방식)

---

## 새 컴포넌트 추가하기

```bash
# Claude에게 이렇게 요청:
"components/Button/Button.tsx 패턴으로 Select 컴포넌트 만들어줘.
tokens/ 폴더 참고해서 토큰 사용하고, stories 파일도 함께."
```

컴포넌트가 완성되면 `components/[컴포넌트명]/` 폴더로 저장하고 이 README의 구조 섹션에 추가.

---

## 디자인 레퍼런스

| 사이트 | 참고 요소 |
|--------|---------|
| [Linear](https://linear.app) | 전반적인 톤, 인터랙션 |
| [Vercel Dashboard](https://vercel.com) | 컴포넌트 밀도, 타이포 |
| [Notion](https://notion.so) | 여백, 계층 구조 |

---

## 업데이트 방법

디자인 결정이 바뀌면:
1. `design-system.md` 먼저 수정
2. `tokens/` 파일 업데이트
3. 영향받는 컴포넌트 수정
4. Claude Projects에 파일 재업로드
