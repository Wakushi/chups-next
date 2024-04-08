"use client"
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
import { useState } from "react"
import LoaderHive from "../ui/loader-hive/loader-hive"

interface BookingModalProps {
  booking: Booking
}

export default function BookingModal({ booking }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const { location, title, image, date, time, adultPrice, childPrice } = booking

  const DialogContentElement = () => {
    if (isSubmitting) {
      return <LoaderHive />
    }
    if (isSuccess) {
      return (
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl p-4 text-center font-bold">
            Merci pour votre réservation !
          </p>
        </div>
      )
    }
    return (
      <div className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle className="text-[1.5rem]">
            Réserver vos places
          </DialogTitle>
        </DialogHeader>
        <div className="flex gap-2">
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
        <BookingForm
          booking={booking}
          setIsSuccess={setIsSuccess}
          setIsSubmitting={setIsSubmitting}
        />
      </div>
    )
  }

  return (
    <Dialog
      onOpenChange={() => {
        setIsSuccess(false)
        setIsSubmitting(false)
      }}
    >
      <DialogTrigger asChild>
        <Button className="md:w-full">Réserver</Button>
      </DialogTrigger>
      <DialogContent className="h-[100vh] rounded overflow-auto p-4">
        <DialogContentElement />
      </DialogContent>
    </Dialog>
  )
}
