import { Booking } from "@/lib/types/Booking"
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore"
import { getBookingTemplate, sendMail } from "./mail.service"

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

export async function bookShow({
  email,
  name,
  adultTickets,
  childTickets,
  show,
}: {
  email: string
  name: string
  adultTickets: number
  childTickets: number
  show: Booking
}) {
  try {
    if (!name || !email || !adultTickets) {
      throw new Error("Missing required fields")
    }
    const totalPrice =
      adultTickets * show.adultPrice + childTickets * show.childPrice

    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    }

    const showDate = new Date(show.date)
    const formattedDate = showDate.toLocaleDateString("fr-FR", dateOptions)

    await sendMail(
      email,
      `Confirmation: Réservation pour le spectacle "${show.title}" du ${formattedDate} à ${show.city}`,
      getBookingTemplate({ show, formattedDate, totalPrice })
    )

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
