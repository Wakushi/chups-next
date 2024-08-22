"use client"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Booking } from "@/lib/types/Booking"
import BookingForm from "./booking-form"
import BookingPoster from "./booking-poster"
import BookingDate from "./booking-date"
import BookingPricing from "./booking-pricing"
import { useState } from "react"
import LoaderHive from "../ui/loader-hive/loader-hive"
import clsx from "clsx"
import { Timestamp } from "firebase-admin/firestore"

interface BookingModalProps {
  booking: Booking
  heroView?: boolean
}

export default function BookingModal({ booking, heroView }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const { location, city, title, image, date, time, adultPrice, childPrice } =
    booking

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
          <p className="px-4 text-center text-lg">
            Un email de confirmation vous a été envoyé.
          </p>
          <p className="px-4 text-center text-lg">
            Veuillez cliquer sur le lien dans l'email afin de finaliser votre
            réservation.
          </p>
          <p className="px-4 text-center text-sm">
            ( Nous vous recommendons également de vérifier le dossier spam de
            votre boîte mail si vous ne trouvez pas l'email. )
          </p>
        </div>
      )
    }
    return (
      <div className="flex flex-col gap-4 pt-6">
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
              <BookingDate date={date as Timestamp} time={time} />
              <p className="text-sm">{location}</p>
              <p className="text-sm">{city}</p>
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
        <Button
          className={clsx("md:w-full flex-1", {
            "bg-transparent text-white border border-white min-h-[40px] max-h-[40px] w-[110px] max-w-[200px] mx-auto uppercase font-bold":
              heroView,
          })}
        >
          Réserver
        </Button>
      </DialogTrigger>
      <DialogContent
        className={clsx("h-[100dvh] md:max-h-[80%] rounded overflow-auto p-4", {
          "md:max-h-[400px]": isSuccess,
        })}
      >
        <DialogContentElement />
      </DialogContent>
    </Dialog>
  )
}
