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
  loadingUser: boolean
  setUser: (user: User) => void
  logOut: () => void
  loginWithToken: () => Promise<void>
}

const UserContext = createContext<UserContextProps>({
  user: null,
  loadingUser: true,
  setUser: (user: User) => {},
  logOut: () => {},
  loginWithToken: () => {
    return new Promise<void>(() => {})
  },
})

export default function UserContextProvider(props: UserContextProviderProps) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoadingUser] = useState<boolean>(true)

  useEffect(() => {
    loginWithToken()
  }, [])

  async function loginWithToken() {
    setLoadingUser(true)
    try {
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
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingUser(false)
    }
  }

  function logOut(): void {
    localStorage.removeItem(STORAGE_ACCESS_TOKEN)
    setUser(null)
    router.push("/")
  }

  const context: UserContextProps = {
    user,
    loadingUser,
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
