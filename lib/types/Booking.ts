import { Timestamp } from "firebase/firestore"
import { Auditorium } from "./Auditorium"

export type Booking = {
  id?: string
  title: string
  date: { seconds: number; nanoseconds: number }
  time: string
  image: string
  adultPrice: number
  childPrice: number
  location: string
  city: string
  locationUrl: string
  auditorium?: Auditorium
}
