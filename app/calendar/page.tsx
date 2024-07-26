import BookingList from "@/components/booking/booking-list"
import { fetchBookings } from "@/services/bookings.service"
import { playfairDisplay } from "@/styles/fonts"

export default async function CalendarPage() {
  const bookings = await fetchBookings()

  return (
    <div className="py-20 md:py-[8rem] px-4">
      <div className="mb-6 md:mb-12 md:p-[1rem]">
        <h1
          className={`${playfairDisplay.className} text-3xl md:text-[3rem] md:mb-2`}
        >
          Agenda
        </h1>
        <p
          className={`${playfairDisplay.className} text-xl md:text-2xl bg-gradient-to-t from-[#020917] via-white to-white bg-clip-text font-display tracking-tight text-transparent`}
        >
          Découvrez toutes nos dates
        </p>
      </div>
      <BookingList bookings={bookings} />
    </div>
  )
}
