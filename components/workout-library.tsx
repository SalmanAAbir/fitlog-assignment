import { WorkoutCard } from "@/components/workout-card";
import { getWorkouts } from "@/lib/workouts";

export async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}

export function WorkoutLibraryFallback() {
  return (
    <div className="mt-8 flex flex-col items-center gap-3 py-16">
      <span className="loading loading-spinner loading-lg text-primary" />
      <p className="text-sm text-[#8a92a0]">Loading workouts…</p>
    </div>
  );
}
