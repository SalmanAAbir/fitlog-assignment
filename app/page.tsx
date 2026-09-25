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
        <Suspense fallback={<WorkoutLibraryFallback />}>
          <WorkoutLibrary />
        </Suspense>
      </section>
    </div>
  );
}
