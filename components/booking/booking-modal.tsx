import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Booking } from "@/lib/definitions"
import BookingForm from "./booking-form"
import BookingPoster from "./booking-poster"
import BookingDate from "./booking-date"
import BookingPricing from "./booking-pricing"

export default function BookingModal({ booking }: { booking: Booking }) {
  const { location, title, image, date, time, adultPrice, childPrice } = booking
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Réserver</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[100vh] rounded overflow-auto p-4">
        <DialogHeader>
          <DialogTitle className="text-[1.5rem]">
            Réserver vos places
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-4">
          <div>
            <BookingPoster
              title={title}
              image={image}
              posterWidth={150}
              posterHeight={150}
            />
          </div>
          <div className="flex flex-col w-full px-2">
            <div className="flex flex-col w-full h-full">
              <span className="text-xl font-bold">{title}</span>
              <BookingDate date={date} time={time} />
              <p className="text-sm">{location}</p>
              <BookingPricing adultPrice={adultPrice} childPrice={childPrice} />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-slate-500 leading-tight font-extralight">
            * La somme totale des billets sera à régler sur place le jour du
            spectacle.
          </p>
          {!!childPrice && (
            <p className="text-sm text-slate-500 leading-tight font-extralight">
              ** Enfant de moins de 12 ans.
            </p>
          )}
        </div>
        <BookingForm booking={booking} />
      </DialogContent>
    </Dialog>
  )
}
