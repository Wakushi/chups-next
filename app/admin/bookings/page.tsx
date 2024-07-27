export const dynamic = "force-dynamic"
import AdminBookingList from "@/components/admin/booking-list"
import { convertTimestampToObject } from "@/lib/utils"
import { fetchBookings } from "@/services/bookings.service"
import { playfairDisplay } from "@/styles/fonts"
import { Timestamp } from "firebase-admin/firestore"

export default async function BookingsPage() {
  const bookings = await fetchBookings()

  const formattedBookings = bookings.map((booking) => ({
    ...booking,
    date: convertTimestampToObject(booking.date as Timestamp),
  }))

  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>
        Représentations
      </h1>
      <AdminBookingList bookings={formattedBookings} />
    </div>
  )
}
