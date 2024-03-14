import { BookButton } from "@/components/buttons"
import Hero from "../components/hero"
import { playfairDisplay } from "@/styles/fonts"
import CalendarCard from "@/components/calendar-card"
import { Booking } from "@/types/booking"
import { Button } from "@/components/ui/button"

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

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-20 px-4 flex items-center flex-col gap-2 w-auto min-h-[100vh]">
        <h2
          className={`${playfairDisplay.className} uppercase text-[2rem] text-center leading-[0.9] my-6 drop-shadow-3xl`}
        >
          Agenda
        </h2>
        <div className="flex flex-col gap-4 mb-4">
          <CalendarCard booking={booking} />
          <CalendarCard booking={booking} />
        </div>
        <Button className="underline" variant={"ghost"}>
          Voir plus de dates
        </Button>
      </section>
      <BookButton />
    </div>
  )
}
