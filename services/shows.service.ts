import { Show } from "@/lib/types/Show"
import { adminDb } from "@/firebase-admin"

const SHOW_COLLECTION = "shows"

export async function fetchShows() {
  const shows: Show[] = []
  const querySnapshot = await adminDb.collection(SHOW_COLLECTION).get()
  querySnapshot.forEach((doc) => {
    shows.push({
      id: doc.id,
      ...doc.data(),
    } as Show)
  })
  return shows.sort((a, b) => b.year - a.year)
}
