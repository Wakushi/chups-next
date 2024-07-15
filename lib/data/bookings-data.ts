import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
import { Booking } from "../types/Booking"

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
