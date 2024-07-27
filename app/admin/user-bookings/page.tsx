export const dynamic = "force-dynamic"
import UserBookingList from "@/components/user-bookings/user-booking-list"
import { convertTimestampToObject } from "@/lib/utils"
import { fetchUserBookings } from "@/services/user-booking.service"
import { playfairDisplay } from "@/styles/fonts"
import { Timestamp } from "firebase-admin/firestore"

export default async function UserBookingsPage() {
  const userBookings = await fetchUserBookings()

  const formattedUserBookings = userBookings.map((userBooking) => ({
    ...userBooking,
    bookingDate: convertTimestampToObject(userBooking.bookingDate as Timestamp),
  }))

  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>
        Réservations
      </h1>
      <UserBookingList userBookings={formattedUserBookings} />
    </div>
  )
}
