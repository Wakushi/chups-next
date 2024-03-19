import { Card } from "@/components/ui/card"
import { Booking } from "@/lib/definitions"
import BookingModal from "./booking-modal"
import BookingPoster from "./booking-poster"
import BookingDate from "./booking-date"
import BookingAccess from "./booking-access"

interface BookingCardProps {
  booking: Booking
}

export default function BookingCard({ booking }: BookingCardProps) {
  const { date, location, locationUrl, time, title, image } = booking

  return (
    <Card className="p-2 w-full bg-slate-900">
      <div className="flex gap-4">
        <BookingPoster title={title} image={image} />
        <div className="flex flex-col w-full px-2">
          <div className="flex flex-col w-full h-full">
            <span className="text-xl font-bold">{title}</span>
            <BookingDate date={date} time={time} />
            <p className="text-sm">{location}</p>
          </div>
          <div className="flex gap-2 justify-end">
            <BookingAccess locationurl={locationUrl} />
            <BookingModal booking={booking} />
          </div>
        </div>
      </div>
    </Card>
  )
}
