import Link from "next/link";

const planCount = 0;
const savedCount = 0;

export function PlanBadges() {
  return (
    <div className="flex items-center justify-end gap-6">
      <Link href="/my-plan" className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted-strong">Plan</span>
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-black">
          {planCount}
        </span>
      </Link>
      <Link href="/my-plan" className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted">Saved</span>
        <span className="inline-flex size-5 items-center justify-center rounded-full border border-badge-line text-[11px] font-medium text-muted-strong">
          {savedCount}
        </span>
      </Link>
    </div>
  );
}
