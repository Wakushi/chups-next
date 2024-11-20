import { Inter, Neucha, Playfair_Display } from "next/font/google"
export const inter = Inter({ subsets: ["latin"] })
export const neucha = Neucha({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-neucha",
  display: "swap",
})
export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
})
