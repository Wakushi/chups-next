import { playfairDisplay } from "@/styles/fonts"
import BookingList from "../booking/booking-list"
import Link from "next/link"
import { Booking } from "@/lib/types/Booking"

export default function AgendaSection({ bookings }: { bookings: Booking[] }) {
  return (
    <section className="py-20 px-4 flex justify-center items-center flex-col gap-2 md:gap-4 w-auto min-h-[100vh]">
      <h2
        className={`${playfairDisplay.className} uppercase text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] text-center leading-[0.9] my-6 drop-shadow-3xl`}
      >
        Agenda
      </h2>
      <BookingList bookings={bookings} max={2} />
      <Link href="/calendar" className="underline md:text-xl">
        Voir plus de dates
      </Link>
    </section>
  )
}
