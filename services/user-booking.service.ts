import { db } from "../firebase"
import { adminDb } from "../firebase-admin"
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore"
import { UserBooking, UserBookingStatus } from "@/lib/types/UserBooking"
import { convertTimestampToObject } from "@/lib/utils"
import { Timestamp } from "firebase-admin/firestore"

const USER_BOOKING_COLLECTION = "user-bookings"
const UNCONFIRMED_USER_BOOKING_COLLECTION = "unconfirmed-user-bookings"

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
  const q = query(
    collection(db, UNCONFIRMED_USER_BOOKING_COLLECTION),
    where("confirmationId", "==", confirmationId)
  )

  const unconfirmedBookings: UserBooking[] = []

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    unconfirmedBookings.push({
      id: doc.id,
      ...doc.data(),
    } as UserBooking)
  })

  const formattedUnconfirmedBookings = unconfirmedBookings.map(
    (unconfirmedBooking) => ({
      ...unconfirmedBooking,
      bookingDate: convertTimestampToObject(
        unconfirmedBooking.bookingDate as Timestamp
      ),
    })
  )

  return formattedUnconfirmedBookings.length
    ? formattedUnconfirmedBookings[0]
    : null
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
): Promise<{ success: boolean; error?: any }> {
  try {
    await adminDb.collection(USER_BOOKING_COLLECTION).add(userBooking)
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
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
    await deleteDoc(doc(db, USER_BOOKING_COLLECTION, userBookingId))
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

// export async function deleteUnconfirmedUserBooking(
//   confirmedUserBookingId: string
// ): Promise<{ success: boolean; error?: any }> {
//   try {
//     await deleteDoc(
//       doc(db, UNCONFIRMED_USER_BOOKING_COLLECTION, confirmedUserBookingId)
//     )
//     return { success: true }
//   } catch (error) {
//     console.error(error)
//     return { success: false }
//   }
// }
