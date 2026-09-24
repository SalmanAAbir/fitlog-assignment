import Image from "next/image";

export function Hero() {
  return (
    <section className="card card-border border-base-300 bg-base-200 sm:card-side sm:items-center">
      <div className="card-body order-2 min-w-0 items-start gap-5 px-6 py-8 sm:order-1 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
        <p className="text-[11px] font-bold tracking-[1.1px] text-primary uppercase">
          Workout Library
        </p>
        <h1 className="w-full max-w-[558px] font-display text-[60px] leading-none font-[800] tracking-[-1.5px] text-base-content uppercase">
          Train with intent. Log every set.
        </h1>
        <p className="max-w-[512px] text-[16px] leading-6 font-normal text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="card-actions mt-2">
          <a
            href="#library"
            className="btn btn-primary h-10 min-h-10 px-6 text-xs font-bold tracking-[0.3px] uppercase"
          >
            Browse workouts
          </a>
        </div>
      </div>
      <div className="order-1 flex w-full justify-center px-6 pt-8 sm:order-2 sm:ml-auto sm:w-fit sm:shrink-0 sm:justify-end sm:px-6 sm:py-8 lg:px-14 lg:py-14">
        <Image
          src="/hero-banner.png"
          alt="Anatomical figure performing a preacher curl"
          width={334}
          height={334}
          priority
          className="h-auto w-full max-w-[220px] object-contain sm:max-w-[240px] lg:max-w-[334px]"
        />
      </div>
    </section>
  );
}
