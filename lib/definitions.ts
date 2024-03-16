export type Booking = {
  id: string
  title: string
  date: Date
  time: string
  image: string
  adultprice: number
  childprice: number
  location: string
  locationurl: string
}

export type Show = {
  id: string
  description: string
  image: string
  title: string
  year: number
}