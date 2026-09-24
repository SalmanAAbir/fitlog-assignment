import { notFound } from "next/navigation";
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
      <h1 className="font-display text-[30px] leading-[1.2] font-bold tracking-[-0.75px] text-base-content uppercase">
        {workout.name}
      </h1>
    </div>
  );
}
