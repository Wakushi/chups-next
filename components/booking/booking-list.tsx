import { Booking } from "@/lib/types/Booking"
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
    <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center w-full gap-4 md:gap-8 mb-4">
      {bookings.map((booking: Booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </div>
  )
}
