import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex w-fit items-center gap-2 sm:gap-2.5">
      <svg
        viewBox="0 0 28 28"
        className="size-6 text-accent sm:size-7"
        aria-hidden="true"
        fill="currentColor"
      >
        <g transform="translate(14 14) rotate(-32)">
          <rect x="-12" y="-2.4" width="4.2" height="4.8" rx="1" />
          <rect x="7.8" y="-2.4" width="4.2" height="4.8" rx="1" />
          <rect x="-8" y="-1.15" width="16" height="2.3" rx="0.6" />
        </g>
        <g transform="translate(14 14) rotate(32)">
          <rect x="-12" y="-2.4" width="4.2" height="4.8" rx="1" />
          <rect x="7.8" y="-2.4" width="4.2" height="4.8" rx="1" />
          <rect x="-8" y="-1.15" width="16" height="2.3" rx="0.6" />
        </g>
      </svg>
      <span className="font-display text-base font-bold tracking-[0.5px] text-white uppercase sm:text-lg sm:tracking-[0.9px]">
        Fitlog
      </span>
    </Link>
  );
}
