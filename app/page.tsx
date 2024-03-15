// Components
import Hero from "../components/hero"
import { BookButton } from "@/components/buttons"
import { Booking } from "@/types/booking"
import { Button } from "@/components/ui/button"
// Styles
import { playfairDisplay } from "@/styles/fonts"
import BookingList from "@/components/calendar-list"
import WaveSeparator from "@/components/ui/wave-separator"

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

export default function Home() {
  return (
    <div>
      <Hero />
      <AgendaSection />
      <AboutSection />
      <BookButton />
    </div>
  )
}

function AgendaSection() {
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

function AboutSection() {
  return (
    <div className="w-auto bg-about-image bg-cover bg-center min-h-[100vh] ">
      <div className="bg-[#111111b0] min-h-[100vh] w-auto relative  flex items-center justify-center flex-col gap-2 px-4">
        <WaveSeparator />
        <div className="flex flex-col gap-2 mb-4">
          <h3
            className={`${playfairDisplay.className} uppercase text-[2rem] text-center leading-[0.9] drop-shadow-3xl`}
          >
            Mystère au Cabaret
          </h3>
          <p className="text-center drop-shadow-3xl text-xl font-bold">
            Spectacle musical des Chup's
          </p>
        </div>
        <p className="text-center drop-shadow-3xl text-slate-200 font-extralight">
          Chaque année la troupe des Chup's vous propose une{" "}
          <span className="font-medium text-brand">création originale</span>{" "}
          autour de <span className="font-medium text-brand">chansons</span>{" "}
          françaises et internationales, de la{" "}
          <span className="font-medium text-brand">comédie</span>, des{" "}
          <span className="font-medium text-brand">chorégraphies</span>...
        </p>
        <p className="text-center drop-shadow-3xl font-extralight	">
          À la veille d'une première qui promet d'être mémorable, des actes
          malveillants menacent le spectacle. Entre{" "}
          <span className="font-medium text-brand">chansons</span>,{" "}
          <span className="font-medium text-brand">rires</span> et{" "}
          <span className="font-medium text-brand">enquêtes</span>, découvrez
          qui, parmi une troupe de personnages hauts en couleur, tente de faire
          tomber le rideau avant l'heure.
        </p>
      </div>
    </div>
  )
}
