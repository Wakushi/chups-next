import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "@/auth.config"
import { z } from "zod"
import bcrypt from "bcrypt"
import { User } from "./definitions"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"

export async function createUser(formData: FormData) {
  "use server"
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const name = formData.get("name") as string
  const role = "user"
  try {
    await setDoc(doc(db, "users", email), {
      name,
      email,
      password: await bcrypt.hash(password, 10),
      role,
    })
  } catch (error) {
    console.error("Failed to create user:", error)
    throw new Error("Failed to create user.")
  }
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  try {
    const docRef = doc(db, "users", email)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return docSnap.data() as User
    } else {
      console.log("No such document!")
    }
  } catch (error) {
    console.error("Failed to fetch user:", error)
    throw new Error("Failed to fetch user.")
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUserByEmail(email)
          if (!user) return null
          const passwordsMatch = await bcrypt.compare(password, user.password)
          if (passwordsMatch) return user
        }
        console.log("Invalid credentials")
        return null
      },
    }),
  ],
})

export async function getLoggedUser(): Promise<User | undefined> {
  const session = await auth()
  if (!session?.user) return undefined
  const user = await getUserByEmail(session?.user?.email ?? "")
  return user
}
