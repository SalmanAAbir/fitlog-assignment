import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-display text-6xl leading-none font-bold text-primary sm:text-7xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold text-base-content uppercase sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-[#8a92a0]">
        That page is not in the library.
      </p>
      <Link
        href="/"
        className="btn btn-primary mt-6 rounded-full px-5 text-xs font-semibold"
      >
        Go to workouts
      </Link>
    </div>
  );
}
