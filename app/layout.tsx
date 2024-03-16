import "../styles/globals.css"
import Header from "../components/header"
import { inter } from "../styles/fonts"
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
