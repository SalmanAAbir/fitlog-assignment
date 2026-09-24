"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

const links = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

const planCount = 0;
const savedCount = 0;

function isActive(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

function NavItems({ pathname }: { pathname: string }) {
  return links.map((link) => {
    const active = isActive(pathname, link.href);

    return (
      <li key={link.href}>
        <Link
          href={link.href}
          aria-current={active ? "page" : undefined}
          className={
            active
              ? "rounded-full! bg-[#1A2312]! px-4! py-1.5! text-[12px]! leading-4! font-semibold! text-[#C2F800]!"
              : "rounded-full! px-4! py-1.5! text-[12px]! leading-4! text-secondary"
          }
        >
          {link.label}
        </Link>
      </li>
    );
  });
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-base-300 bg-base-100/95">
      <div className="navbar mx-auto h-20 min-h-20 w-full max-w-7xl justify-between px-4 sm:px-6">
        <div className="navbar-start w-auto gap-1 md:w-1/2">
          <details key={pathname} className="dropdown md:hidden">
            <summary aria-label="Open menu" className="btn btn-ghost btn-square btn-sm">
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </summary>
            <ul className="menu dropdown-content z-20 mt-3 w-52 rounded-box border border-base-300 bg-base-200 p-2">
              <NavItems pathname={pathname} />
            </ul>
          </details>
          <Logo />
        </div>
        <nav className="navbar-center hidden md:flex" aria-label="Primary">
          <ul className="menu menu-horizontal menu-sm bg-transparent p-0">
            <NavItems pathname={pathname} />
          </ul>
        </nav>
        <div className="navbar-end w-auto gap-3 md:w-1/2 md:gap-6">
          <Link href="/my-plan" className="inline-flex items-center gap-2 text-xs font-medium text-warning">
            Plan
            <span className="badge badge-primary badge-sm size-5 rounded-full px-0 font-bold">
              {planCount}
            </span>
          </Link>
          <Link href="/my-plan" className="inline-flex items-center gap-2 text-xs font-medium text-secondary">
            Saved
            <span className="badge badge-outline badge-sm size-5 rounded-full border-base-300 px-0 font-medium text-warning">
              {savedCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
