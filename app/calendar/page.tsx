export const dynamic = "force-dynamic"
import BookingList from "@/components/booking/booking-list"
import { convertTimestampToObject } from "@/lib/utils"
import { fetchBookings } from "@/services/bookings.service"
import { playfairDisplay } from "@/styles/fonts"
import { Timestamp } from "firebase-admin/firestore"

export default async function CalendarPage() {
  const bookings = await fetchBookings()

  const now = Date.now()

  const formattedBookings = bookings
    .map((booking) => ({
      ...booking,
      date: convertTimestampToObject(booking.date as Timestamp),
    }))
    .filter((b) => b.date.seconds * 1000 > now)

  return (
    <div className="py-20 md:py-[8rem] px-4">
      <div className="mb-6 md:mb-12 md:p-[1rem]">
        <h1
          className={`${playfairDisplay.className} text-3xl md:text-[3rem] md:mb-2`}
        >
          Agenda
        </h1>
        <p
          className={`${playfairDisplay.className} text-xl md:text-2xl bg-gradient-to-t from-[#a7a7a7] via-white to-white bg-clip-text font-display tracking-tight text-transparent`}
        >
          Découvrez toutes nos dates
        </p>
      </div>
      {formattedBookings.length ? (
        <BookingList bookings={formattedBookings} />
      ) : (
        <p className="md:pl-4">Aucune date n'est disponible pour le moment.</p>
      )}
    </div>
  )
}
