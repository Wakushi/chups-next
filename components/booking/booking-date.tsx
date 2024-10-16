import { timestampToReadableDate } from "@/lib/utils"
import { Timestamp } from "firebase-admin/firestore"

export default function BookingDate({
  date,
  time,
}: {
  date: Timestamp
  time: string
}) {
  return (
    <p className="text-sm md:text-lg font-extralight flex items-baseline gap-2">
      {timestampToReadableDate(date, "long")} à {time}
    </p>
  )
}
