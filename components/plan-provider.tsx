"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Workout } from "@/lib/workouts";

type PlanContextValue = {
  plan: Workout[];
  saved: Workout[];
  doneIds: string[];
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  markDone: (workout: Workout) => void;
  removeFromPlan: (workout: Workout) => void;
  removeFromSaved: (workout: Workout) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [doneIds, setDoneIds] = useState<string[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const planRef = useRef(plan);
  const savedRef = useRef(saved);
  const doneRef = useRef(doneIds);
  const timer = useRef<number | null>(null);
  planRef.current = plan;
  savedRef.current = saved;
  doneRef.current = doneIds;

  function show(text: string) {
    setMessage(text);
    if (timer.current) {
      window.clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => setMessage(null), 2500);
  }

  function addToPlan(workout: Workout) {
    if (planRef.current.some((item) => item.id === workout.id)) {
      show("Already in today's plan");
      return;
    }
    const next = [...planRef.current, workout];
    planRef.current = next;
    setPlan(next);
    show("Added to today's plan");
  }

  function saveForLater(workout: Workout) {
    if (savedRef.current.some((item) => item.id === workout.id)) {
      show("Already saved");
      return;
    }
    const next = [...savedRef.current, workout];
    savedRef.current = next;
    setSaved(next);
    show("Saved for later");
  }

  function markDone(workout: Workout) {
    if (doneRef.current.includes(workout.id)) {
      show("Already marked as done");
      return;
    }
    const next = [...doneRef.current, workout.id];
    doneRef.current = next;
    setDoneIds(next);
    show("Marked as done");
  }

  function removeFromPlan(workout: Workout) {
    const next = planRef.current.filter((item) => item.id !== workout.id);
    planRef.current = next;
    setPlan(next);
    const doneNext = doneRef.current.filter((id) => id !== workout.id);
    doneRef.current = doneNext;
    setDoneIds(doneNext);
    show("Removed from today's plan");
  }

  function removeFromSaved(workout: Workout) {
    const next = savedRef.current.filter((item) => item.id !== workout.id);
    savedRef.current = next;
    setSaved(next);
    show("Removed from saved");
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        doneIds,
        addToPlan,
        saveForLater,
        markDone,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
      {message ? (
        <div className="toast toast-end toast-bottom z-50">
          <div
            role="status"
            className="alert border-base-300 bg-base-200 text-sm text-base-content"
          >
            <span>{message}</span>
          </div>
        </div>
      ) : null}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const value = useContext(PlanContext);
  if (!value) {
    throw new Error("usePlan must be used within PlanProvider");
  }
  return value;
}
