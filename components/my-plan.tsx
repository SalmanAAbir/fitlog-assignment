"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePlan } from "@/components/plan-provider";
import type { Workout } from "@/lib/workouts";

export function MyPlan() {
  const { plan, saved, doneIds, markDone, removeFromPlan, removeFromSaved } =
    usePlan();
  const [tab, setTab] = useState<"plan" | "saved">("plan");
  const workouts = tab === "plan" ? plan : saved;
  const minutes = workouts.reduce((total, workout) => total + workout.duration, 0);
  const calories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6">
      <div>
        <h1 className="font-display text-[30px] leading-[1.2] font-bold text-base-content uppercase">
          My plan
        </h1>
        <p className="mt-1 text-sm text-[#8a92a0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="grid grid-cols-3 rounded-2xl border border-[#232732] bg-[#13161d] px-2 py-4 sm:px-6 sm:py-5">
        <Metric label="Exercises" value={workouts.length} accent />
        <Metric label="Minutes" value={minutes} />
        <Metric label="Calories" value={calories} />
      </div>
      <div
        role="tablist"
        className="tabs tabs-box h-10 w-fit rounded-xl border border-[#232732] bg-[#151921] p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "plan"}
          className={`tab h-8 rounded-lg px-4 text-xs ${tab === "plan" ? "tab-active bg-[#1f242d] font-bold text-white" : "text-[#8a92a0]"}`}
          onClick={() => setTab("plan")}
        >
          Today&apos;s Plan
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "saved"}
          className={`tab h-8 rounded-lg px-4 text-xs ${tab === "saved" ? "tab-active bg-[#1f242d] font-bold text-white" : "text-[#8a92a0]"}`}
          onClick={() => setTab("saved")}
        >
          Saved
        </button>
      </div>
      {workouts.length === 0 ? (
        <EmptyPlan />
      ) : (
        <div className="flex flex-col gap-4">
          {workouts.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              done={tab === "plan" && doneIds.includes(workout.id)}
              onDone={tab === "plan" ? () => markDone(workout) : undefined}
              onRemove={
                tab === "plan"
                  ? () => removeFromPlan(workout)
                  : () => removeFromSaved(workout)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Metric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="border-l border-[#232732] px-2 first:border-l-0 sm:px-6">
      <p className="text-[11px] text-[#8a92a0] sm:text-xs">{label}</p>
      <p
        className={`font-display text-3xl leading-none font-bold sm:text-4xl ${accent ? "text-primary" : "text-base-content"}`}
      >
        {value}
      </p>
    </div>
  );
}

function PlanCard({
  workout,
  done,
  onDone,
  onRemove,
}: {
  workout: Workout;
  done: boolean;
  onDone?: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <Image
          src={workout.image}
          alt=""
          width={144}
          height={80}
          className="h-16 w-28 shrink-0 rounded-xl object-cover sm:h-20 sm:w-36"
        />
        <div className="min-w-0">
          <h2 className="truncate font-display text-base font-bold text-base-content uppercase">
            {workout.name}
          </h2>
          <p className="truncate text-xs font-semibold text-[#8a92a0]">
            {workout.equipment}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-[11px] text-[#8a92a0] sm:text-xs">
            <span className="inline-flex items-center gap-1">
              <Image src="/icons/clock.svg" alt="" width={14} height={14} unoptimized />
              {workout.duration} min
            </span>
            <span className="inline-flex items-center gap-1">
              <Image src="/icons/flame.svg" alt="" width={14} height={14} unoptimized />
              {workout.caloriesBurned} kcal
            </span>
            <span className="inline-flex items-center gap-1">
              <Image src="/icons/star.svg" alt="" width={14} height={14} unoptimized />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-outline h-8 min-h-8 rounded-full border-[#374151] px-4 text-xs font-normal text-white"
        >
          View Details
        </Link>
        {onDone ? (
          <button
            type="button"
            className="btn btn-primary h-8 min-h-8 rounded-full px-4 text-xs font-semibold"
            onClick={onDone}
            disabled={done}
          >
            <Image src="/icons/check.svg" alt="" width={14} height={14} unoptimized />
            {done ? "Done" : "Mark as Done"}
          </button>
        ) : null}
        <button
          type="button"
          aria-label={`Remove ${workout.name}`}
          className="btn btn-ghost btn-square size-7 min-h-7 rounded-full"
          onClick={onRemove}
        >
          <Image src="/icons/remove.svg" alt="" width={16} height={16} unoptimized />
        </button>
      </div>
    </div>
  );
}

function EmptyPlan() {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <p className="font-display text-xl font-bold text-base-content uppercase">
        Nothing here yet
      </p>
      <p className="text-xs text-[#a1a1aa]">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/" className="btn btn-primary mt-2 rounded-full px-5 text-xs font-semibold">
        Go to workouts
      </Link>
    </div>
  );
}
