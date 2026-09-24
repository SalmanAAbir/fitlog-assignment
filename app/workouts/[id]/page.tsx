import { notFound } from "next/navigation";
import { WorkoutDetails } from "@/components/workout-details";
import { getWorkout } from "@/lib/workouts";

export default async function WorkoutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
      <WorkoutDetails workout={workout} />
    </div>
  );
}
