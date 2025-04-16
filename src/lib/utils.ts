import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomStats(totalPoints: number = 20): {
  strength: number;
  agility: number;
  speed: number;
  health: number;
  intelligence: number;
} {
  // Initialize stats
  let remaining = totalPoints;
  const stats = {
    strength: 0,
    agility: 0,
    speed: 0,
    health: 0,
    intelligence: 0,
  };

  // List of stat keys
  const statKeys = Object.keys(stats) as Array<keyof typeof stats>;

  // Assign at least 1 point to each stat
  for (const key of statKeys) {
    stats[key] = 1;
    remaining -= 1;
  }

  // Distribute remaining points randomly
  while (remaining > 0) {
    const randomStat = statKeys[Math.floor(Math.random() * statKeys.length)];
    stats[randomStat] += 1;
    remaining -= 1;
  }

  return stats;
} 