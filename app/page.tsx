export const dynamic = "force-dynamic"
import { BookButton } from "@/components/buttons"
import Hero from "../components/landing/hero"
import AgendaSection from "@/components/landing/agenda-section"
import AboutSection from "@/components/landing/about-section"
import { fetchBookings } from "@/services/bookings.service"
import { convertTimestampToObject } from "@/lib/utils"
import { Timestamp } from "firebase-admin/firestore"

export default async function Home() {
  const bookings = await fetchBookings()

  const now = Date.now()

  const formattedBookings = bookings
    .map((booking) => ({
      ...booking,
      date: convertTimestampToObject(booking.date as Timestamp),
    }))
    .filter((b) => b.date.seconds * 1000 > now)

  return (
    <>
      <Hero bookings={formattedBookings} />
      <AboutSection />
      {!!formattedBookings.length && (
        <AgendaSection bookings={formattedBookings} />
      )}
      {!!formattedBookings.length && <BookButton />}
    </>
  )
}
