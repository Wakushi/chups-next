import { playfairDisplay } from "@/styles/fonts"
import {
  FaExternalLinkAlt,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Booking } from "@/lib/types/Booking"
import { timestampToReadableDate } from "@/lib/utils"
import Link from "next/link"
import Copy from "../ui/copy"
import { Timestamp } from "firebase-admin/firestore"
import BookingModal from "../booking/booking-modal"

export default function Hero({ bookings }: { bookings: Booking[] }) {
  const now = new Date()

  const incommingShows = bookings
    .filter((booking) => {
      return booking.date.seconds * 1000 > now.getTime()
    })
    .splice(0, 2)

  function isSameShow(): boolean {
    if (incommingShows.length < 2) {
      return true
    }

    return incommingShows[0].title === incommingShows[1].title
  }

  if (!incommingShows || !incommingShows.length) {
    return (
      <div className="p-4 flex items-center justify-center flex-col gap-1 w-auto min-h-[100vh] bg-hero-image bg-cover bg-center">
        <h2 className="text-center text-2xl md:text-3xl lg:text-[2rem] drop-shadow-3xl leading-[1.2] max-w-[450px]">
          La troupe de comédie musicale des Chups vous retrouve à la rentrée
          pour de nouvelles aventures !
        </h2>
      </div>
    )
  }

  return (
    <div className="p-4 flex items-center justify-center flex-col gap-1 w-auto min-h-[100vh] bg-hero-image bg-cover bg-center">
      <p className="text-center text-lg md:text-xl lg:text-[2.5rem] drop-shadow-3xl leading-[1.2]">
        Les Chup's vous présentent leur nouveau spectacle musical
      </p>
      <h2
        className={`${playfairDisplay.className} uppercase text-[4rem] mb-8 lg:mb-[5rem] lg:text-[6rem] text-center leading-[0.9] my-6 drop-shadow-3xl animate-fade-in-zoom opacity-0`}
      >
        {incommingShows[0].title}
      </h2>
      <div className="flex gap-2 lg:w-[80%]">
        {incommingShows.splice(0, isSameShow() ? 2 : 1).map((show) => {
          return <HeroBookingDate show={show} />
        })}
      </div>
    </div>
  )
}

function HeroBookingDate({ show }: { show: Booking }) {
  const { date, location, time, city, externalBookingUrl } = show
  return (
    <div className="flex-1 flex flex-col w-1/2 min-h-[220px] justify-between lg:justify-normal lg:gap-8">
      <div className="flex flex-col lg:gap-2">
        <p className="text-center md:text-xl lg:text-[2rem] lg:mb-4 drop-shadow-3xl">
          {timestampToReadableDate(date as Timestamp)} à {time}
        </p>
        <h3
          className={`${playfairDisplay.className} text-center text-bold uppercase text-lg md:text-2xl lg:text-[2.5rem] drop-shadow-3xl`}
        >
          {location}
        </h3>
        <h3
          className={`${playfairDisplay.className} uppercase text-center text-xl md:text-3xl lg:text-[2.6rem] drop-shadow-3xl`}
        >
          {city}
        </h3>
        {!externalBookingUrl && <HeroContact />}
      </div>
      {externalBookingUrl ? (
        <Link
          className="flex uppercase font-bold max-w-[200px] bg-transparent text-white border border-white mx-auto items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 md:w-full"
          href={externalBookingUrl}
          target="_blank"
        >
          Réserver
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      ) : (
        <BookingModal booking={show} heroView={true} />
      )}
    </div>
  )
}

function HeroContact() {
  return (
    <div className="flex flex-col mt-2 lg:mt-8 lg:gap-4">
      <div className="flex items-center justify-center gap-2">
        <Link
          href="tel:0611846005"
          className="flex items-center gap-2 text-bold text-center md:text-lg lg:text-[2rem] drop-shadow-3xl"
        >
          <span>06.11.84.60.05</span>
        </Link>
        <Copy contentToCopy="0611846005" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Link
          href="mailto:leschups@outlook.fr"
          className="flex items-center justify-center gap-2 text-bold text-center md:text-lg lg:text-[2rem] drop-shadow-3xl"
        >
          <span>leschups@outlook.fr</span>
        </Link>
        <Copy contentToCopy="leschups@outlook.fr" />
      </div>
    </div>
  )
}
