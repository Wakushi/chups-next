import { User } from "@/lib/types/User"
import { hashPassword } from "@/lib/crypto"
import { adminDb } from "@/firebase-admin"

const USER_COLLECTION = "users"

export async function createUser(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const name = formData.get("name") as string
  const role = "user"

  try {
    await adminDb.collection(USER_COLLECTION).add({
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
  const q = adminDb
    .collection(USER_COLLECTION)
    .where("email", "==", email)
    .limit(1)

  const querySnapshot = await q.get()

  if (querySnapshot.empty) {
    return null
  }

  const doc = querySnapshot.docs[0]
  const user = {
    id: doc.id,
    ...doc.data(),
  } as User

  return user
}
