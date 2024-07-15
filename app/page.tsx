import { BookButton } from "@/components/buttons"
import Hero from "../components/landing/hero"
import AgendaSection from "@/components/landing/agenda-section"
import AboutSection from "@/components/landing/about-section"
import { fetchBookings } from "@/lib/data/bookings-data"

export default async function Home() {
  const bookings = await fetchBookings()

  return (
    <>
      <Hero bookings={bookings} />
      <AgendaSection bookings={bookings} />
      <AboutSection />
      <BookButton />
    </>
  )
}
