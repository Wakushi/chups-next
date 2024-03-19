import { Booking, Show } from "./definitions"
import { db } from "../firebase"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"

export async function fetchBookings() {
  const bookings: Booking[] = []
  const querySnapshot = await getDocs(collection(db, "bookings"))
  querySnapshot.forEach((doc) => {
    bookings.push({
      id: doc.id,
      ...doc.data(),
      date: new Date(doc.data().date.seconds * 1000),
    } as Booking)
  })
  return bookings.sort((a, b) => a.date.getTime() - b.date.getTime())
}

export async function fetchShows() {
  const shows: Show[] = []
  const querySnapshot = await getDocs(collection(db, "shows"))
  querySnapshot.forEach((doc) => {
    shows.push({
      id: doc.id,
      ...doc.data(),
    } as Show)
  })
  return shows.sort((a, b) => b.year - a.year)
}
