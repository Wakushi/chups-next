import { playfairDisplay } from "@/styles/fonts"
import BookingList from "../booking-list"
import { Button } from "../ui/button"
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

const bookings: Booking[] = [booking, booking, booking, booking]

export default function AgendaSection() {
  return (
    <section className="py-20 px-4 flex items-center flex-col gap-2 w-auto min-h-[100vh]">
      <h2
        className={`${playfairDisplay.className} uppercase text-[2rem] text-center leading-[0.9] my-6 drop-shadow-3xl`}
      >
        Agenda
      </h2>
      <BookingList bookings={bookings} max={2} />
      <Button className="underline" variant={"ghost"}>
        Voir plus de dates
      </Button>
    </section>
  )
}
