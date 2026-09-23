import Link from "next/link";

const linkClassName =
  "inline-flex h-7 items-center px-4 text-xs font-medium text-muted";

export function NavLinks() {
  return (
    <nav className="flex items-center" aria-label="Primary">
      <Link href="/" className={linkClassName}>
        Workouts
      </Link>
      <Link href="/my-plan" className={linkClassName}>
        My Plan
      </Link>
    </nav>
  );
}
