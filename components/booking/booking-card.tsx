import { Card } from "@/components/ui/card"
import { Booking } from "@/lib/types/Booking"
import BookingModal from "./booking-modal"
import BookingPoster from "./booking-poster"
import BookingDate from "./booking-date"
import BookingAccess from "./booking-access"
import { Timestamp } from "firebase-admin/firestore"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"

interface BookingCardProps {
  booking: Booking
}

export default function BookingCard({ booking }: BookingCardProps) {
  const {
    date,
    location,
    city,
    locationUrl,
    time,
    title,
    image,
    externalBookingUrl,
  } = booking

  return (
    <Card className="p-2 md:p-4 bg-teal-900 border border-transparent shadow-lg w-full max-w-[360px] md:max-w-[500px]">
      <div className="flex gap-4">
        <BookingPoster title={title} image={image} />
        <div className="flex flex-col w-full px-2">
          <div className="flex flex-col w-full h-full md:gap-2">
            <span className="text-xl md:text-[1.8rem] font-bold">{title}</span>
            <BookingDate date={date as Timestamp} time={time} />
            <div className="flex flex-col">
              <p className="text-sm md:text-xl">{location}</p>
              <p className="text-sm md:text-xl">à {city}</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <BookingAccess locationurl={locationUrl} />
            {externalBookingUrl ? (
              <Link
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 md:w-full"
                href={externalBookingUrl}
                target="_blank"
              >
                Réserver
                <FaExternalLinkAlt className="text-xs" />
              </Link>
            ) : (
              <BookingModal booking={booking} />
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
