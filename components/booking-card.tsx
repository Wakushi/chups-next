import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Booking } from "@/types/booking"
import Image from "next/image"
import { Button } from "./ui/button"
import { playfairDisplay } from "@/styles/fonts"

interface CalendarCardProps {
  booking: Booking
}

export default function CalendarCard({ booking }: CalendarCardProps) {
  const {
    adultPrice,
    childPrice,
    date,
    location,
    locationUrl,
    time,
    title,
    image,
  } = booking

  return (
    <Card className="p-2 w-full bg-slate-900">
      <div className="flex gap-4">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded"
        />
        <div className="flex flex-col w-full px-2">
          <div className="flex flex-col w-full h-full">
            <span className="text-xl font-bold">{title}</span>
            <p className="text-sm">
              {date.toLocaleDateString("fr-FR", {
                weekday: "short",
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}{" "}
              à {time}
            </p>
            <p className="text-sm">{location}</p>
          </div>
          <Button className="self-end">Réserver</Button>
        </div>
      </div>
    </Card>
  )
}
