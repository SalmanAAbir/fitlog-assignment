import Image from "next/image";
import type { Workout } from "@/lib/workouts";

export function WorkoutDetails({ workout }: { workout: Workout }) {
  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", String(workout.sets)],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", String(workout.rating)],
  ];

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
      <div className="relative h-80 overflow-hidden rounded-2xl border border-[#232834] bg-[#171a21] sm:h-[480px] lg:h-[735px]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          sizes="(min-width: 1024px) 588px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-col gap-6">
        <h1 className="font-display text-4xl leading-tight font-bold text-base-content uppercase">
          {workout.name}
        </h1>
        <p className="text-base leading-6 font-normal text-[#9CA3AF]">
          {workout.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="badge badge-primary h-6 rounded-full border-0 px-3 text-xs font-semibold text-[#0f1115]"
            >
              {tag}
            </span>
          ))}
        </div>
        <dl className="overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-2 gap-4 border-t border-[#1e2330] px-6 py-3.5 first:border-t-0"
            >
              <dt className="text-xs font-bold text-[#9CA3AF] uppercase">
                {label}
              </dt>
              <dd className="text-sm font-medium text-[#e5e7eb]">{value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <h2 className="text-base font-[800] text-base-content uppercase">
            Instructions
          </h2>
          <ol className="mt-4 flex flex-col gap-2">
            {workout.instructions.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6">
                <span className="text-[#9CA3AF]">{index + 1}.</span>
                <span className="text-[#d1d5db]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="btn btn-primary h-11 min-h-11 rounded-xl px-5 text-sm font-semibold"
          >
            <Image
              src="/icons/add-plan.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
            />
            Add to today&apos;s plan
          </button>
          <button
            type="button"
            className="btn btn-outline h-11 min-h-11 rounded-xl border-[#374151] bg-transparent px-5 text-sm font-medium text-[#e5e7eb]"
          >
            <Image
              src="/icons/save-later.svg"
              alt=""
              width={16}
              height={16}
              unoptimized
            />
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}
