import Image from "next/image";
import Link from "next/link";

export function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const compact = size === "footer";

  return (
    <Link href="/" aria-label="FitLog" className="flex w-fit items-center">
      <Image
        src="/logo.png"
        alt="FitLog"
        width={94}
        height={28}
        priority={!compact}
        className={compact ? "h-5 w-auto" : "h-6 w-auto sm:h-7"}
      />
    </Link>
  );
}
