"use client"
import { User } from "@/lib/types/User"
import { createContext, useState, ReactNode, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

interface UserContextProviderProps {
  children: ReactNode
}

interface UserContextProps {
  user: User | null
  loadingUser: boolean
  setUser: (user: User) => void
  login: (email: string, password: string) => void
  logOut: () => void
  loginWithToken: () => Promise<void>
}

const UserContext = createContext<UserContextProps>({
  user: null,
  loadingUser: true,
  setUser: (user: User) => {},
  login: (email: string, password: string) => {},
  logOut: () => {},
  loginWithToken: () => {
    return new Promise<void>(() => {})
  },
})

export default function UserContextProvider(props: UserContextProviderProps) {
  const router = useRouter()
  const { toast } = useToast()

  const [user, setUser] = useState<User | null>(null)
  const [loadingUser, setLoadingUser] = useState<boolean>(true)

  useEffect(() => {
    loginWithToken()
  }, [])

  async function login(email: string, password: string) {
    const response = await fetch("api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })

    if (!response.ok) {
      const { message } = await response.json()
      toast({
        title: "Erreur de connexion",
        description: message,
        type: "background",
        style: {
          backgroundColor: "red",
          color: "#fff",
        },
      })
      return
    }

    const data = await response.json()
    const user = data.user as User

    setUser(user)

    switch (user.role) {
      case "user":
        router.push("/member/downloads")
        break
      case "admin":
        router.push("/admin/user-bookings")
        break
      default:
        router.push("/")
        break
    }
  }

  async function loginWithToken() {
    setLoadingUser(true)
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/signin-with-token`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      )

      if (!response.ok) {
        throw new Error("Failed to validate token")
      }

      const user: User = await response.json()
      setUser(user)
    } catch (err) {
    } finally {
      setLoadingUser(false)
    }
  }

  async function logOut(): Promise<void> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      )

      if (!response.ok) {
        throw new Error("Failed to log out")
      }

      setUser(null)
      router.push("/")
    } catch (error) {
      console.error(error)
    }
  }

  const context: UserContextProps = {
    user,
    login,
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
