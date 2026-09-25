"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Workout } from "@/lib/workouts";

const STORAGE_KEY = "fitlog-plan";
export const PLAN_LIMIT = 5;

type PlanStore = {
  plan: Workout[];
  saved: Workout[];
  doneIds: number[];
};

const emptyStore: PlanStore = { plan: [], saved: [], doneIds: [] };
let currentStore = emptyStore;
let storeLoaded = false;
const storeListeners = new Set<() => void>();

function isWorkout(value: unknown): value is Workout {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as Workout).id === "number" &&
    typeof (value as Workout).name === "string" &&
    Array.isArray((value as Workout).muscleGroups)
  );
}

function readStore() {
  if (storeLoaded) {
    return currentStore;
  }
  storeLoaded = true;
  if (typeof window === "undefined") {
    return currentStore;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return currentStore;
    }
    const parsed = JSON.parse(raw) as Partial<PlanStore>;
    const plan = Array.isArray(parsed.plan) ? parsed.plan.filter(isWorkout) : [];
    const saved = Array.isArray(parsed.saved) ? parsed.saved.filter(isWorkout) : [];
    const doneIds = Array.isArray(parsed.doneIds)
      ? parsed.doneIds.filter((id): id is number => typeof id === "number")
      : [];
    if (plan.length > 0 || saved.length > 0 || doneIds.length > 0) {
      currentStore = { plan, saved, doneIds };
    }
  } catch {
    currentStore = emptyStore;
  }

  return currentStore;
}

function writeStore(next: PlanStore) {
  currentStore = next;
  storeLoaded = true;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  storeListeners.forEach((listener) => listener());
}

function subscribeStore(listener: () => void) {
  storeListeners.add(listener);
  return () => storeListeners.delete(listener);
}

type PlanContextValue = {
  plan: Workout[];
  saved: Workout[];
  doneIds: number[];
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  markDone: (workout: Workout) => void;
  removeFromPlan: (workout: Workout) => void;
  removeFromSaved: (workout: Workout) => void;
};

const PlanContext = createContext<PlanContextValue | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const store = useSyncExternalStore(subscribeStore, readStore, () => emptyStore);
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  function show(text: string) {
    setMessage(text);
    if (timer.current) {
      window.clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => setMessage(null), 2500);
  }

  function addToPlan(workout: Workout) {
    const { plan, saved, doneIds } = readStore();
    if (plan.some((item) => item.id === workout.id)) {
      show("Already in today's plan");
      return;
    }
    if (plan.length >= PLAN_LIMIT) {
      show("Today's plan already has five lifts");
      return;
    }
    writeStore({ plan: [...plan, workout], saved, doneIds });
    show("Added to today's plan");
  }

  function saveForLater(workout: Workout) {
    const { plan, saved, doneIds } = readStore();
    if (saved.some((item) => item.id === workout.id)) {
      show("Already saved");
      return;
    }
    writeStore({ plan, saved: [...saved, workout], doneIds });
    show("Saved for later");
  }

  function markDone(workout: Workout) {
    const { plan, saved, doneIds } = readStore();
    if (doneIds.includes(workout.id)) {
      show("Already marked as done");
      return;
    }
    writeStore({ plan, saved, doneIds: [...doneIds, workout.id] });
    show("Marked as done");
  }

  function removeFromPlan(workout: Workout) {
    const { plan, saved, doneIds } = readStore();
    writeStore({
      plan: plan.filter((item) => item.id !== workout.id),
      saved,
      doneIds: doneIds.filter((id) => id !== workout.id),
    });
    show("Removed from today's plan");
  }

  function removeFromSaved(workout: Workout) {
    const { plan, saved, doneIds } = readStore();
    writeStore({
      plan,
      saved: saved.filter((item) => item.id !== workout.id),
      doneIds,
    });
    show("Removed from saved");
  }

  return (
    <PlanContext.Provider
      value={{
        plan: store.plan,
        saved: store.saved,
        doneIds: store.doneIds,
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
            className="alert alert-success border-0 text-sm font-medium shadow-lg"
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
