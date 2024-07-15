import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { User } from "@/lib/types/User"
import { hashPassword } from "@/lib/crypto"

export async function createUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const name = formData.get("name") as string
  const role = "user"
  try {
    await setDoc(doc(db, "users", email), {
      name,
      email,
      password: await hashPassword(password),
      role,
    })
  } catch (error) {
    console.error("Failed to create user:", error)
    throw new Error("Failed to create user.")
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const docRef = doc(db, "users", email)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data() as User
  }
  return null
}
