import { ReactNode } from "react"
import UserContextProvider from "./UserContext"
import MusicPlayerContextProvider from "./MusicContext"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <UserContextProvider>
      <MusicPlayerContextProvider>{children}</MusicPlayerContextProvider>
    </UserContextProvider>
  )
}
