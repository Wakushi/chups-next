import { adminDb } from "../firebase-admin"
import { UserBooking, UserBookingStatus } from "@/lib/types/UserBooking"
import { convertTimestampToObject } from "@/lib/utils"
import { Timestamp } from "firebase-admin/firestore"

const USER_BOOKING_COLLECTION = "user-bookings"
const UNCONFIRMED_USER_BOOKING_COLLECTION = "unconfirmed-user-bookings"

export async function createUserBooking(
  userBooking: Omit<UserBooking, "id">
): Promise<{ success: boolean; error?: any }> {
  try {
    await adminDb.collection(USER_BOOKING_COLLECTION).add(userBooking)
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
}

export async function createUnconfirmedUserBooking(
  userBooking: Omit<UserBooking, "id">
): Promise<{ success: boolean; error?: any }> {
  try {
    await adminDb
      .collection(UNCONFIRMED_USER_BOOKING_COLLECTION)
      .add(userBooking)
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
}

export async function getUnconfirmedUserBookingByConfirmationId(
  confirmationId: string
): Promise<UserBooking | null> {
  const q = adminDb
    .collection(UNCONFIRMED_USER_BOOKING_COLLECTION)
    .where("confirmationId", "==", confirmationId)
    .limit(1)

  const querySnapshot = await q.get()

  if (querySnapshot.empty) {
    return null
  }

  const doc = querySnapshot.docs[0]

  const unconfirmedBooking = {
    id: doc.id,
    ...doc.data(),
  } as UserBooking

  unconfirmedBooking.bookingDate = convertTimestampToObject(
    unconfirmedBooking.bookingDate as Timestamp
  )

  return unconfirmedBooking
}

export async function fetchUserBookings(): Promise<UserBooking[]> {
  const userBookings: UserBooking[] = []
  const querySnapshot = await adminDb.collection(USER_BOOKING_COLLECTION).get()
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

export async function updateUserBookingStatus(
  userBooking: UserBooking,
  newStatus: UserBookingStatus
): Promise<{ success: boolean; data?: UserBooking; error?: any }> {
  try {
    const docRef = adminDb
      .collection(USER_BOOKING_COLLECTION)
      .doc(userBooking.id!)

    await docRef.update({
      status: newStatus,
    })

    const updatedDoc = await docRef.get()
    if (updatedDoc.exists) {
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
  const batch = adminDb.batch()

  userBookings.forEach((userBooking) => {
    const userBookingRef = adminDb
      .collection(USER_BOOKING_COLLECTION)
      .doc(userBooking.id!)
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
    await adminDb
      .collection(USER_BOOKING_COLLECTION)
      .doc(userBookingId)
      .delete()
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false }
  }
}

export async function deleteUnconfirmedUserBooking(
  confirmedUserBookingId: string
): Promise<{ success: boolean; error?: any }> {
  try {
    await adminDb
      .collection(UNCONFIRMED_USER_BOOKING_COLLECTION)
      .doc(confirmedUserBookingId)
      .delete()
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error }
  }
}
