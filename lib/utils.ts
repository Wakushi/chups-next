import { type ClassValue, clsx } from "clsx"
import { Timestamp } from "firebase-admin/firestore"
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
          year: "numeric",
          month: "long",
          day: "numeric",
        }

  const formattedDate = date.toLocaleDateString("fr-FR", options)
  return formattedDate.charAt(0).toUpperCase() + formattedDate.substring(1)
}

export function timestampToReadableDate(
  timestamp: Timestamp,
  format: "short" | "long" = "long"
): string {
  const date = new Date(timestamp.seconds * 1000)
  const options: Intl.DateTimeFormatOptions =
    format === "short"
      ? {
          year: "2-digit",
          month: "numeric",
          day: "numeric",
        }
      : {
          year: "numeric",
          month: "long",
          day: "numeric",
        }
  return date.toLocaleDateString("fr-FR", options)
}

export function convertTimestampToObject(timestamp: Timestamp): {
  seconds: number
  nanoseconds: number
} {
  return {
    seconds: timestamp.seconds,
    nanoseconds: timestamp.nanoseconds,
  }
}
