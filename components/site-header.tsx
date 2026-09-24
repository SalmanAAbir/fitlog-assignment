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

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-base-300 bg-base-100/95">
      <div className="navbar mx-auto h-20 min-h-20 w-full max-w-7xl px-4 sm:px-6">
        <div className="navbar-start w-auto sm:w-1/2">
          <Logo />
        </div>
        <nav className="navbar-center" aria-label="Primary">
          <ul className="menu menu-horizontal menu-sm bg-transparent p-0">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={active ? undefined : "text-secondary"}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="navbar-end w-auto gap-3 sm:w-1/2 sm:gap-6">
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
