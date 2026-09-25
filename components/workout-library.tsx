import { WorkoutBrowser } from "@/components/workout-browser";
import { getWorkouts } from "@/lib/workouts";

export async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return <WorkoutBrowser workouts={workouts} />;
}

export function WorkoutLibraryFallback() {
  return (
    <div className="flex flex-col items-center gap-3 py-16">
      <span className="loading loading-spinner loading-lg text-primary" />
      <p className="text-sm text-[#8a92a0]">Loading workouts…</p>
    </div>
  );
}
