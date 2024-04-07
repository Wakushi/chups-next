import BookingList from "@/components/booking/booking-list"
import { fetchBookings } from "@/lib/data"
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
          className={`${playfairDisplay.className} text-xl md:text-2xl opacity-70`}
        >
          Découvrez toutes nos dates
        </p>
      </div>
      <BookingList bookings={bookings} />
    </div>
  )
}
