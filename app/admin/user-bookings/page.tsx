import UserBookingList from "@/components/user-bookings/user-booking-list"
import { fetchUserBookings } from "@/services/bookings.service"
import { playfairDisplay } from "@/styles/fonts"

export default async function UserBookingsPage() {
  const userBookings = await fetchUserBookings()

  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>
        Réservations
      </h1>
      <UserBookingList userBookings={userBookings} />
    </div>
  )
}
