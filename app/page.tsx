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

  const formattedBookings = bookings.map((booking) => ({
    ...booking,
    date: convertTimestampToObject(booking.date as Timestamp),
  }))

  return (
    <>
      <Hero bookings={formattedBookings} />
      <AgendaSection bookings={formattedBookings} />
      <AboutSection />
      <BookButton />
    </>
  )
}
