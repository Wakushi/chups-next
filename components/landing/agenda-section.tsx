import { playfairDisplay } from "@/styles/fonts"
import BookingList from "../booking/booking-list"
import { fetchBookings } from "@/lib/data"
import Link from "next/link"

export default async function AgendaSection() {
  const bookings = await fetchBookings()

  return (
    <section className="py-20 px-4 flex items-center flex-col gap-2 w-auto min-h-[100dvh]">
      <h2
        className={`${playfairDisplay.className} uppercase text-[2rem] text-center leading-[0.9] my-6 drop-shadow-3xl`}
      >
        Agenda
      </h2>
      <BookingList bookings={bookings} max={2} />
      <Link href="/calendar" className="underline">
        Voir plus de dates
      </Link>
    </section>
  )
}
