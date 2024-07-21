import { Timestamp } from "firebase/firestore"
import { Booking } from "./Booking"

export type UserBooking = {
  id: string
  email: string
  name: string
  adultTickets: number
  childTickets: number
  totalPrice: number
  show: Booking
  date: Timestamp
  status: UserBookingStatus
}

export enum UserBookingStatus {
  PENDING = "PENDING",
  DONE = "DONE",
}

export enum UserBookingStatusLabel {
  PENDING = "À traiter",
  DONE = "Traitée",
}
