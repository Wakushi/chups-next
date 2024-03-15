import BookingList from "@/components/booking-list"
import { bookings } from "@/lib/data"

export default function CalendarPage() {
  return (
    <div className="py-20 px-4">
      <BookingList bookings={bookings} />
    </div>
  )
}
