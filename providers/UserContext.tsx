"use client"
import { User } from "@/lib/types/User"
import { STORAGE_ACCESS_TOKEN } from "@/lib/constants"
import { createContext, useState, ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"

interface UserContextProviderProps {
  children: ReactNode
}

interface UserContextProps {
  user: User | null
  setUser: (user: User) => void
  logOut: () => void
  loginWithToken: () => Promise<void>
}

const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: (user: User) => {},
  logOut: () => {},
  loginWithToken: () => {
    return new Promise<void>(() => {})
  },
})

export default function UserContextProvider(props: UserContextProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    loginWithToken()
  }, [])

  async function loginWithToken() {
    const token = localStorage.getItem(STORAGE_ACCESS_TOKEN)

    if (!token) return

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/signin-with-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      }
    )

    const user: User = await response.json()
    setUser(user)
  }

  function logOut(): void {
    localStorage.removeItem(STORAGE_ACCESS_TOKEN)
    setUser(null)
    router.push("/")
  }

  const context: UserContextProps = {
    user,
    setUser,
    logOut,
    loginWithToken,
  }

  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext }
