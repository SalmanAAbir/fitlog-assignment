import Image from "next/image";

export type WorkoutCardData = {
  title: string;
  tags: string[];
  equipment: string;
  minutes: number;
  calories: number;
  rating: number;
  image: string;
};

export const sampleWorkout: WorkoutCardData = {
  title: "Barbell Bench Press",
  tags: ["Chest", "Arms"],
  equipment: "Barbell, Bench",
  minutes: 25,
  calories: 180,
  rating: 4.8,
  image: "/workouts/barbell-bench-press.png",
};

export function WorkoutCard({ workout }: { workout: WorkoutCardData }) {
  return (
    <article className="card card-border w-full max-w-[395px] overflow-hidden border-base-300 bg-base-200">
      <div className="h-48 overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.title}
          width={395}
          height={192}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="card-body gap-1 px-6 pt-6 pb-5">
        <div className="flex flex-wrap gap-2">
          {workout.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-primary h-[21px] rounded-full border-0 px-2.5 text-[11px] font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg leading-[1.55] font-bold text-base-content uppercase">
          {workout.title}
        </h3>
        <p className="text-xs leading-4 font-normal text-[#9CA3AF]">
          {workout.equipment}
        </p>
        <div className="mt-4 flex items-center gap-5 border-t border-[#20242e] pt-3 text-xs leading-4 font-normal text-[#9CA3AF]">
          <span className="inline-flex items-center gap-1.5">
            <Image src="/icons/clock.svg" alt="" width={14} height={14} unoptimized />
            {workout.minutes} min
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Image src="/icons/flame.svg" alt="" width={14} height={14} unoptimized />
            {workout.calories} kcal
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Image src="/icons/star.svg" alt="" width={14} height={14} unoptimized />
            {workout.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
