import { Booking } from "@/lib/types/Booking"
import { getBookingTemplate, sendMail } from "./mail.service"
import { UserBookingStatus } from "@/lib/types/UserBooking"
import { timestampToReadableDate } from "@/lib/utils"
import { v4 as uuidv4 } from "uuid"
import { createUnconfirmedUserBooking } from "./user-booking.service"
import { Timestamp } from "firebase-admin/firestore"
import { adminDb } from "@/firebase-admin"

const BOOKING_COLLECTION = "bookings"

export async function fetchBookings(): Promise<Booking[]> {
  const bookings: Booking[] = []
  const querySnapshot = await adminDb.collection(BOOKING_COLLECTION).get()
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
  const docRef = adminDb.collection(BOOKING_COLLECTION).doc(bookingId)
  try {
    const doc = await docRef.get()
    if (!doc.exists) {
      console.log("No such document!")
      return null
    } else {
      return doc.data() as Booking
    }
  } catch (e) {
    console.log("Error getting document:", e)
    return null
  }
}

export async function createBooking(
  booking: Omit<Booking, "id">
): Promise<{ success: boolean; error?: any }> {
  try {
    await adminDb.collection(BOOKING_COLLECTION).add(booking)
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
}

export async function bookShow({
  firstName,
  email,
  name,
  adultTickets,
  childTickets,
  show,
}: {
  firstName: string
  email: string
  name: string
  adultTickets: number
  childTickets: number
  show: Booking
}): Promise<{ success: boolean }> {
  try {
    if (!firstName || !name || !email || !adultTickets) {
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
    const formattedDate = timestampToReadableDate(date as Timestamp)
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
      firstName,
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
