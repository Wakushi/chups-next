import { DataTable } from "./data-table"
import { columns } from "./columns"
import { Booking } from "@/lib/types/Booking"

export default function AdminBookingList({
  bookings,
}: {
  bookings: Booking[]
}) {
  return <DataTable columns={columns} data={bookings} />
}
