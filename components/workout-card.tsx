import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/lib/workouts";

export function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="card card-border group w-full overflow-hidden border-base-300 bg-base-200 transition duration-300 hover:-translate-y-1 hover:border-primary"
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={395}
          height={192}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="card-body gap-1 px-6 pt-6 pb-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="badge badge-primary h-[21px] rounded-full border-0 px-2.5 text-[11px] font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg leading-[1.55] font-bold text-base-content uppercase">
          {workout.name}
        </h3>
        <p className="text-xs leading-4 font-normal text-[#9CA3AF]">
          {workout.equipment}
        </p>
        <div className="mt-4 flex items-center gap-5 border-t border-[#20242e] pt-3 text-xs leading-4 font-normal text-[#9CA3AF]">
          <span className="inline-flex items-center gap-1.5">
            <Image src="/icons/clock.svg" alt="" width={14} height={14} unoptimized />
            {workout.duration} min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Image src="/icons/flame.svg" alt="" width={14} height={14} unoptimized />
            {workout.caloriesBurned} kcal
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Image src="/icons/star.svg" alt="" width={14} height={14} unoptimized />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
