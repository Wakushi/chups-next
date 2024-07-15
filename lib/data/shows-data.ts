import { Show } from "../definitions"
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"

export async function fetchShows() {
  const shows: Show[] = []
  const querySnapshot = await getDocs(collection(db, "shows"))
  querySnapshot.forEach((doc) => {
    shows.push({
      id: doc.id,
      ...doc.data(),
    } as Show)
  })
  return shows.sort((a, b) => b.year - a.year)
}
