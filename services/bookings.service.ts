import { Booking } from "@/lib/types/Booking"
import { db } from "../firebase"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
  writeBatch,
} from "firebase/firestore"
import { getBookingTemplate, sendMail } from "./mail.service"
import { UserBooking, UserBookingStatus } from "@/lib/types/UserBooking"
import { timestampToReadableDate } from "@/lib/utils"

const BOOKING_COLLECTION = "bookings"
const USER_BOOKING_COLLECTION = "user-bookings"

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
    const totalPrice =
      adultTickets * show.adultPrice + childTickets * show.childPrice

    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    }

    const formattedDate = timestampToReadableDate(show.date)

    // await sendMail(
    //   email,
    //   `Confirmation: Réservation pour le spectacle "${show.title}" du ${formattedDate} à ${show.city}`,
    //   getBookingTemplate({ show, formattedDate, totalPrice })
    // )

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

    await createUserBooking({
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
    })

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}

export async function fetchUserBookings(): Promise<UserBooking[]> {
  const userBookings: UserBooking[] = []
  const querySnapshot = await getDocs(collection(db, USER_BOOKING_COLLECTION))
  querySnapshot.forEach((doc) => {
    userBookings.push({
      id: doc.id,
      ...doc.data(),
    } as UserBooking)
  })
  return userBookings.sort((a, b) => {
    if (
      a.status === UserBookingStatus.DONE &&
      b.status === UserBookingStatus.PENDING
    ) {
      return 1
    }
    return -1
  })
}

export async function createUserBooking(
  userBooking: Omit<UserBooking, "id">
): Promise<void> {
  try {
    await addDoc(collection(db, USER_BOOKING_COLLECTION), userBooking)
  } catch (error) {
    console.log(error)
  }
}

export async function updateUserBooking(
  userBooking: UserBooking
): Promise<{ success: boolean; data?: UserBooking; error?: any }> {
  try {
    const docRef = doc(db, USER_BOOKING_COLLECTION, userBooking.id)
    await setDoc(docRef, { ...userBooking })

    const updatedDoc = await getDoc(docRef)
    if (updatedDoc.exists()) {
      return { success: true, data: updatedDoc.data() as UserBooking }
    } else {
      throw new Error("Document not found after update.")
    }
  } catch (error) {
    console.error(error)
    return { success: false, error }
  }
}

export async function updateManyUserBookingsStatus(
  userBookings: UserBooking[],
  status: UserBookingStatus
): Promise<{ success: boolean; error?: any }> {
  const batch = writeBatch(db)

  userBookings.forEach((userBooking) => {
    const userBookingRef = doc(db, USER_BOOKING_COLLECTION, userBooking.id)
    batch.update(userBookingRef, { status })
  })

  try {
    await batch.commit()
    return { success: true }
  } catch (error) {
    console.error("Failed to update user booking status: ", error)
    return { success: false, error }
  }
}

export async function deleteUserBooking(
  userBookingId: string
): Promise<{ success: boolean; error?: any }> {
  try {
    await deleteDoc(doc(db, USER_BOOKING_COLLECTION, userBookingId))
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false }
  }
}
