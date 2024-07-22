import { type ClassValue, clsx } from "clsx"
import { Timestamp } from "firebase/firestore"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toReadableDate(
  date: Date,
  format: "short" | "long" = "long"
): string {
  const options: Intl.DateTimeFormatOptions =
    format === "short"
      ? {
          year: "2-digit",
          month: "numeric",
          day: "numeric",
        }
      : {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }

  const formattedDate = date.toLocaleDateString("fr-FR", options)
  return formattedDate.charAt(0).toUpperCase() + formattedDate.substring(1)
}

export function timestampToReadableDate(timestamp: Timestamp): string {
  const date = new Date(timestamp.seconds * 1000)
  return date.toLocaleDateString("fr-FR", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  })
}
