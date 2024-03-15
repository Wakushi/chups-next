import { sql } from "@vercel/postgres"
import { Booking } from "./definitions"
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
