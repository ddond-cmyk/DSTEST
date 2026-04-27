// components/Button/Button.stories.tsx
// 사용 예시 — 새 컴포넌트의 스토리 파일 작성 시 이 구조 참고

import Button from "./Button";

// ─── 기본 사용 ────────────────────────────────────────────────────────────────

export const BasicExamples = () => (
  <div className="flex flex-col gap-8 p-8">

    {/* Variants */}
    <section>
      <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Variants</h3>
      <div className="flex items-center gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </section>

    {/* Sizes */}
    <section>
      <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Sizes</h3>
      <div className="flex items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </section>

    {/* With Icons */}
    <section>
      <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">With Icons</h3>
      <div className="flex items-center gap-3">
        <Button
          variant="primary"
          leftIcon={<PlusIcon />}
        >
          New Project
        </Button>
        <Button
          variant="secondary"
          rightIcon={<ArrowIcon />}
        >
          Continue
        </Button>
        <Button
          variant="ghost"
          leftIcon={<TrashIcon />}
        >
          Delete
        </Button>
      </div>
    </section>

    {/* States */}
    <section>
      <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">States</h3>
      <div className="flex items-center gap-3">
        <Button isLoading>Saving...</Button>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" isLoading>Loading</Button>
      </div>
    </section>

    {/* Full Width */}
    <section>
      <h3 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Full Width</h3>
      <div className="max-w-sm">
        <Button fullWidth variant="primary">Deploy to Production</Button>
      </div>
    </section>

  </div>
);

// ─── 아이콘 헬퍼 (실제 프로젝트에서는 lucide-react 등 사용) ──────────────────

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
  </svg>
);
