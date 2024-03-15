import { Booking } from "@/types/booking"

const booking: Booking = {
  id: "1",
  title: "Mystère au cabaret",
  date: new Date("2024-05-24"),
  time: "20h30",
  image: "/images/poster-cabaret.jpg",
  adultPrice: 20,
  childPrice: 10,
  location: "Espace Culturel Lucien Jean",
  locationUrl:
    "https://www.google.com/maps?q=Espace+Culturel+Lucien+Jean+Marly-la-ville",
}

export const bookings: Booking[] = [booking, booking, booking, booking]
