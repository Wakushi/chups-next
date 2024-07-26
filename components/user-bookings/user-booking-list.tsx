import { UserBooking } from "@/lib/types/UserBooking"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export default function UserBookingList({
  userBookings,
}: {
  userBookings: UserBooking[]
}) {
  return <DataTable columns={columns} data={userBookings} />
}
