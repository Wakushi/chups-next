import { ReactNode } from "react"
import UserContextProvider from "./UserContext"

export default function Providers({ children }: { children: ReactNode }) {
  return <UserContextProvider>{children}</UserContextProvider>
}
