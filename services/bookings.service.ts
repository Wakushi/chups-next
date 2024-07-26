import { Booking } from "@/lib/types/Booking"
import { db } from "../firebase"
import {
  addDoc,
  collection,
  doc,
  getDocFromCache,
  getDocs,
  Timestamp,
} from "firebase/firestore"
import { getBookingTemplate, sendMail } from "./mail.service"
import { UserBookingStatus } from "@/lib/types/UserBooking"
import { timestampToReadableDate } from "@/lib/utils"
import { v4 as uuidv4 } from "uuid"
import { createUnconfirmedUserBooking } from "./user-booking.service"

const BOOKING_COLLECTION = "bookings"

export async function fetchBookings(): Promise<Booking[]> {
  const bookings: Booking[] = []
  const querySnapshot = await getDocs(collection(db, BOOKING_COLLECTION))
  querySnapshot.forEach((doc) => {
    bookings.push({
      id: doc.id,
      ...doc.data(),
    } as Booking)
  })
  return bookings.sort((a, b) => a.date.seconds - b.date.seconds)
}

export async function getBookingById(
  bookingId: string
): Promise<Booking | null> {
  const docRef = doc(db, BOOKING_COLLECTION, bookingId)
  try {
    const doc = await getDocFromCache(docRef)
    return doc.data() as Booking
  } catch (e) {
    console.log("Error getting cached document:", e)
    return null
  }
}

export async function createBooking(
  booking: Omit<Booking, "id">
): Promise<{ success: boolean; error?: any }> {
  try {
    await addDoc(collection(db, BOOKING_COLLECTION), booking)
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
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
}): Promise<{ success: boolean }> {
  try {
    if (!name || !email || !adultTickets) {
      throw new Error("Missing required fields")
    }

    const {
      date,
      location,
      city,
      locationUrl,
      time,
      title,
      image,
      adultPrice,
      childPrice,
    } = show

    const totalPrice = adultTickets * adultPrice + childTickets * childPrice
    const formattedDate = timestampToReadableDate(date)
    const confirmationId = uuidv4()

    await createUnconfirmedUserBooking({
      date,
      location,
      city,
      adultPrice,
      childPrice,
      locationUrl,
      time,
      title,
      image,
      email,
      name,
      adultTickets,
      childTickets,
      totalPrice,
      bookingDate: Timestamp.fromDate(new Date()),
      status: UserBookingStatus.PENDING,
      confirmationId,
    })

    await sendMail(
      email,
      `Confirmation: Réservation pour le spectacle "${show.title}" du ${formattedDate} à ${show.city}`,
      getBookingTemplate({
        confirmationId,
        email,
        show,
        formattedDate,
        totalPrice,
      })
    )

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
