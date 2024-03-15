"use client"
import { Card } from "@/components/ui/card"
import { Booking } from "@/types/booking"
import Image from "next/image"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import BookingForm from "./booking-form"

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
          <div className="flex justify-between gap-2">
            <BookingAccess locationUrl={locationUrl} />
            <BookingModal booking={booking} />
          </div>
        </div>
      </div>
    </Card>
  )
}

function BookingModal({ booking }: BookingCardProps) {
  const { location, title, image, date, time, adultPrice, childPrice } = booking
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Réserver</Button>
      </DialogTrigger>
      <DialogContent className="h-full rounded overflow-auto p-4">
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

function BookingPoster({
  title,
  image,
  posterWidth,
  posterHeight,
}: {
  title: string
  image: string
  posterWidth?: number
  posterHeight?: number
}) {
  return (
    <Image
      src={image}
      alt={title}
      width={posterWidth ?? 100}
      height={posterHeight ?? 100}
      className="rounded"
    />
  )
}

function BookingDate({ date, time }: { date: Date; time: string }) {
  return (
    <p className="text-sm font-extralight">
      {date.toLocaleDateString("fr-FR", {
        weekday: "short",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}{" "}
      à {time}
    </p>
  )
}

function BookingAccess({ locationUrl }: { locationUrl: string }) {
  return (
    <Button variant="secondary">
      <Link
        href={locationUrl}
        target="_blank"
        className="flex justify-center items-center"
      >
        <span>Accès</span>
        <Image
          src="/images/icons/plan-icon.png"
          alt="Plan icon"
          width={25}
          height={25}
        />
      </Link>
    </Button>
  )
}

function BookingPricing({
  adultPrice,
  childPrice,
}: {
  adultPrice: number
  childPrice: number
}) {
  if (!childPrice) {
    return (
      <div>
        <p className="text-sm mt-3">Prix unique : {adultPrice}€*</p>
      </div>
    )
  }

  return (
    <div>
      <p className="text-sm font-extralight	mt-3 flex flex-col">
        <span>Prix adulte : {adultPrice}€*</span>
        <span>Prix enfant : {childPrice}€**</span>
      </p>
    </div>
  )
}
