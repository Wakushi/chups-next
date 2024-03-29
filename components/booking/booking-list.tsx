import { Booking } from "@/lib/definitions"
import BookingCard from "./booking-card"

interface BookingListProps {
  bookings: Booking[]
  max?: number
}

export default function BookingList({ bookings, max }: BookingListProps) {
  if (max) {
    bookings = bookings.slice(0, max)
  }
  return (
    <div className="flex flex-col gap-4 mb-4">
      {bookings.map((booking: Booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  )
}
