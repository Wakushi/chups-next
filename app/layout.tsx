import "../styles/globals.css"
import Header from "../components/header"
import { inter } from "../styles/fonts"
import { Toaster } from "@/components/ui/toaster"
import HeaderShell from "@/components/header-shell"

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
        <HeaderShell headerContent={<Header />} />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
