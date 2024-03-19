export type Booking = {
  id: string
  title: string
  date: Date
  time: string
  image: string
  adultPrice: number
  childPrice: number
  location: string
  locationUrl: string
}

export type Show = {
  id: string
  description: string
  image: string
  title: string
  year: number
}

export type User = {
  id: string
  email: string
  name: string
  password: string
  role: "user" | "admin"
}
