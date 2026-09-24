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
    <div className="mt-8 flex justify-center py-16">
      <span className="loading loading-spinner loading-lg text-primary" />
    </div>
  );
}
