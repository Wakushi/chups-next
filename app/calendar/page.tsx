import BookingList from "@/components/booking/booking-list"
import { fetchBookings } from "@/lib/data"
import { playfairDisplay } from "@/styles/fonts"

export default async function CalendarPage() {
  const bookings = await fetchBookings()

  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>Agenda</h1>
      <BookingList bookings={bookings} />
    </div>
  )
}
