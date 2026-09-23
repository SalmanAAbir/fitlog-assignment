"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center" aria-label="Primary">
      {links.map((link) => {
        const active =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex h-7 items-center rounded-full px-2.5 text-xs whitespace-nowrap sm:px-4 ${
              active
                ? "bg-active-nav font-semibold text-accent"
                : "font-medium text-muted"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
