import { Suspense } from "react";
import { Hero } from "@/components/hero";
import {
  WorkoutLibrary,
  WorkoutLibraryFallback,
} from "@/components/workout-library";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-12 sm:px-6">
      <Hero />
      <section id="library" className="scroll-mt-8">
        <h2 className="font-display text-[30px] leading-[1.2] font-bold tracking-[-0.75px] text-base-content uppercase">
          The library
        </h2>
        <p className="mt-1 text-sm leading-normal text-secondary">
          Twelve lifts covering every major muscle group.
        </p>
        <Suspense fallback={<WorkoutLibraryFallback />}>
          <WorkoutLibrary />
        </Suspense>
      </section>
    </div>
  );
}
