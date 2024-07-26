import { db } from "../firebase"
import { Auditorium } from "@/lib/types/Auditorium"
import { collection, getDocs } from "firebase/firestore"

const AUDITORIUM_COLLECTION = "auditorium"

export async function fetchAuditoriums(): Promise<Auditorium[]> {
  const auditoriums: Auditorium[] = []
  const querySnapshot = await getDocs(collection(db, AUDITORIUM_COLLECTION))
  querySnapshot.forEach((doc) => {
    auditoriums.push({
      id: doc.id,
      ...doc.data(),
    } as Auditorium)
  })
  return auditoriums
}
