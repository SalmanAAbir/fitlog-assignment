import Image from "next/image";

export function Hero() {
  return (
    <section className="card card-border border-base-300 bg-base-200 sm:card-side sm:items-center">
      <div className="card-body min-w-0 items-start gap-5 px-6 py-8 sm:px-8 sm:py-10 lg:max-w-[558px] lg:px-14 lg:py-14">
        <p className="text-[11px] font-bold tracking-[1.1px] text-primary uppercase">
          Workout Library
        </p>
        <h1 className="font-display text-3xl leading-none font-bold tracking-[-1px] text-balance text-base-content uppercase sm:text-5xl sm:tracking-[-1.5px] lg:text-[60px]">
          <span className="lg:block">Train with intent. Log </span>
          <span className="lg:block">every set.</span>
        </h1>
        <p className="max-w-[512px] text-base leading-normal font-normal text-secondary">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="card-actions mt-2">
          <a
            href="#library"
            className="btn btn-primary h-10 min-h-10 px-6 text-xs font-bold tracking-[0.3px] uppercase"
          >
            <svg
              viewBox="0 0 16 16"
              className="size-3.5"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 2.5v9" />
              <path d="M4.5 8.5 8 12l3.5-3.5" />
            </svg>
            Browse workouts
          </a>
        </div>
      </div>
      <figure className="m-0 shrink-0 bg-transparent px-6 pb-8 sm:w-auto sm:px-6 sm:py-8 lg:px-14 lg:py-14">
        <Image
          src="/hero-banner.png"
          alt="Anatomical figure performing a preacher curl"
          width={334}
          height={334}
          priority
          className="h-auto! w-auto! max-w-[220px]! object-contain sm:max-w-[240px]! lg:max-w-[334px]!"
        />
      </figure>
    </section>
  );
}
