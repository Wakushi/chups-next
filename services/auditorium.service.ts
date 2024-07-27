import { adminDb } from "@/firebase-admin"
import { Auditorium } from "@/lib/types/Auditorium"

const AUDITORIUM_COLLECTION = "auditorium"

export async function fetchAuditoriums(): Promise<Auditorium[]> {
  const auditoriums: Auditorium[] = []
  const querySnapshot = await adminDb.collection(AUDITORIUM_COLLECTION).get()
  querySnapshot.forEach((doc) => {
    auditoriums.push({
      id: doc.id,
      ...doc.data(),
    } as Auditorium)
  })
  return auditoriums
}
