import BookingList from "@/components/booking-list"
import { bookings } from "@/lib/data"
import { playfairDisplay } from "@/styles/fonts"

export default function CalendarPage() {
  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>Agenda</h1>
      <BookingList bookings={bookings} />
    </div>
  )
}
