import "../styles/globals.css"
import Header from "../components/header"
import { inter } from "../styles/fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
