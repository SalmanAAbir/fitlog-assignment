export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!response.ok) {
    throw new Error("Could not load workouts");
  }

  return response.json();
}

export async function getWorkout(id: string): Promise<Workout | null> {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Could not load workout");
  }

  return response.json();
}
