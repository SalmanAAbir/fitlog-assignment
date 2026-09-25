"use client";

import { useState } from "react";
import { WorkoutCard } from "@/components/workout-card";
import { matchesWorkout, type Workout } from "@/lib/workouts";

type SortKey = "duration" | "calories" | "rating";

const sortValue: Record<SortKey, (workout: Workout) => number> = {
  duration: (workout) => workout.duration,
  calories: (workout) => workout.caloriesBurned,
  rating: (workout) => workout.rating,
};

export function WorkoutBrowser({ workouts }: { workouts: Workout[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("duration");
  const visible = workouts
    .filter((workout) => matchesWorkout(workout, query))
    .sort((a, b) => sortValue[sort](b) - sortValue[sort](a));

  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-[30px] leading-[1.2] font-bold tracking-[-0.75px] text-base-content uppercase">
            The library
          </h2>
          <p className="mt-1 text-sm leading-normal text-secondary">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="block">
          <span className="sr-only">Search workouts</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or tag"
            className="input h-10 w-full border-[#232732] bg-[#151921] text-sm sm:max-w-xs"
          />
        </label>
        <label className="flex items-center gap-3 text-xs text-[#8a92a0]">
          Sort By
          <select
            aria-label="Sort By"
            className="select select-sm h-10 min-h-10 rounded-xl border-[#232732] bg-[#151921] text-xs text-white"
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        </div>
      </div>
      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm text-[#8a92a0]">
          No workouts match that search.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </>
  );
}
