import { sql } from "@vercel/postgres"
import { Booking, Show } from "./definitions"
import { unstable_noStore as noStore } from "next/cache"

export async function fetchBookings() {
  noStore()
  try {
    const data = await sql<Booking>`SELECT * FROM bookings`
    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch bookings data.")
  }
}

export async function fetchShows() {
  noStore()
  try {
    const data = await sql<Show>`SELECT * FROM shows`
    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch shows data.")
  }
}
