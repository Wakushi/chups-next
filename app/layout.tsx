import "../styles/globals.css"
import Header from "../components/header"
import { neucha } from "../styles/fonts"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${neucha.className} dark`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
