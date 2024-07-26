import AdminBookingList from "@/components/admin/booking-list"
import { fetchAuditoriums } from "@/services/auditorium.service"
import { fetchBookings } from "@/services/bookings.service"
import { playfairDisplay } from "@/styles/fonts"

export default async function BookingsPage() {
  const bookings = await fetchBookings()
  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>
        Représentations
      </h1>
      <AdminBookingList bookings={bookings} />
    </div>
  )
}
