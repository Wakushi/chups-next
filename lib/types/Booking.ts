import { Timestamp } from "firebase/firestore"

export type Booking = {
  id: string
  title: string
  date: Timestamp
  time: string
  image: string
  adultPrice: number
  childPrice: number
  location: string
  city: string
  locationUrl: string
}
