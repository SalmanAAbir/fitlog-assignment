"use client";

import Image from "next/image";
import { usePlan } from "@/components/plan-provider";
import type { Workout } from "@/lib/workouts";

export function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater } = usePlan();

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        className="btn btn-primary h-11 min-h-11 rounded-xl px-5 text-sm font-semibold"
        onClick={() => addToPlan(workout)}
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
        onClick={() => saveForLater(workout)}
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
  );
}
