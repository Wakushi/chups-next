import { Timestamp } from "firebase/firestore"
import { Booking } from "./Booking"

export type UserBooking = Booking & {
  email: string
  name: string
  adultTickets: number
  childTickets: number
  totalPrice: number
  bookingDate: Timestamp
  status: UserBookingStatus
  confirmationId?: string
}

export enum UserBookingStatus {
  PENDING = "PENDING",
  DONE = "DONE",
}

export enum UserBookingStatusLabel {
  PENDING = "À traiter",
  DONE = "Traitée",
}
