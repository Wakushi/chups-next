import { db } from "../firebase"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore"
import { UserBooking, UserBookingStatus } from "@/lib/types/UserBooking"

const USER_BOOKING_COLLECTION = "user-bookings"
const UNCONFIRMED_USER_BOOKING_COLLECTION = "unconfirmed-user-bookings"

export async function createUnconfirmedUserBooking(
  userBooking: Omit<UserBooking, "id">
): Promise<{ success: boolean; error?: any }> {
  try {
    await addDoc(
      collection(db, UNCONFIRMED_USER_BOOKING_COLLECTION),
      userBooking
    )
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

  let unconfirmedBooking: UserBooking | null = null

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    unconfirmedBooking = { id: doc.id, ...doc.data() } as UserBooking
  })

  return unconfirmedBooking
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
    await addDoc(collection(db, USER_BOOKING_COLLECTION), userBooking)
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
    const docRef = doc(db, USER_BOOKING_COLLECTION, userBooking.id)
    await updateDoc(docRef, {
      status: newStatus,
    })

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

export async function deleteUnconfirmedUserBooking(
  confirmedUserBookingId: string
): Promise<{ success: boolean; error?: any }> {
  try {
    await deleteDoc(
      doc(db, UNCONFIRMED_USER_BOOKING_COLLECTION, confirmedUserBookingId)
    )
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false }
  }
}
