import { playfairDisplay } from "@/styles/fonts"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Booking } from "@/lib/types/Booking"
import { timestampToReadableDate } from "@/lib/utils"
import Link from "next/link"
import Copy from "../ui/copy"
import { Timestamp } from "firebase-admin/firestore"
import BookingModal from "../booking/booking-modal"
import Image from "next/image"

export default function Hero({ bookings }: { bookings: Booking[] }) {
  const now = new Date()

  const poster = "/images/bonheur-en-famille-poster.jpg"

  const incommingShows = bookings
    .filter((booking) => {
      return booking.date.seconds * 1000 > now.getTime()
    })
    .splice(0, 2)

  function areSameShows(): boolean {
    if (incommingShows.length < 2) {
      return true
    }
    const showA = incommingShows[0]
    const showB = incommingShows[1]

    return showA.title === showB.title && showA.location === showB.location
  }

  function getSameShowDates(show: Booking): Booking[] {
    return bookings.filter(
      (b) => b.location === show.location && b.title === show.title
    )
  }

  if (!incommingShows || !incommingShows.length) {
    return (
      <div className="p-4 flex items-center justify-center flex-col gap-1 w-auto min-h-[100vh] bg-slate-400 overflow-hidden bg-hero-image bg-cover bg-center">
        {poster ? (
          <>
            <div className="absolute top-0 left-0 w-screen h-screen bg-white bg-opacity-[0.01] backdrop-blur-sm"></div>
            <div className="max-w-[550px] max-h-[550px] z-[1]">
              <Image
                src="/images/bonheur-en-famille-poster.jpg"
                alt="Affiche 'Bonheur en famille'"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
                sizes="100vw"
                className="rounded"
              />
            </div>
          </>
        ) : (
          <h2 className="text-center text-2xl md:text-3xl lg:text-[2rem] drop-shadow-3xl leading-[1.2] max-w-[450px]">
            La troupe de comédie musicale des Chups vous retrouve bientôt pour
            de nouvelles aventures !
          </h2>
        )}
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
      <div className="flex items-center gap-2 lg:w-[80%]">
        {incommingShows.splice(0, 2).map((show, i) => {
          return (
            <HeroBookingDate
              key={`booking-date-${i}`}
              show={show}
              sameShows={areSameShows()}
              getSameShowDates={getSameShowDates}
            />
          )
        })}
      </div>
    </div>
  )
}

function HeroBookingDate({
  show,
  sameShows,
  getSameShowDates,
}: {
  show: Booking
  sameShows: boolean
  getSameShowDates: (show: Booking) => Booking[]
}) {
  getSameShowDates(show)

  const { location, city, externalBookingUrl } = show
  return (
    <div className="flex-1 flex flex-col w-1/2 min-h-[220px] justify-between lg:justify-normal lg:gap-8">
      <div className="flex flex-col lg:gap-2">
        {sameShows ? (
          <div className="flex flex-col">
            <p className="text-center md:text-xl lg:text-[2rem] lg:mb-4 drop-shadow-3xl">
              {timestampToReadableDate(show.date as Timestamp)} à {show.time}
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            {getSameShowDates(show).map((s, i) => (
              <p
                key={`show-date-${i}`}
                className="text-center md:text-xl lg:text-[2rem] lg:mb-4 drop-shadow-3xl"
              >
                {timestampToReadableDate(s.date as Timestamp)} à {s.time}
              </p>
            ))}
          </div>
        )}
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
          className="flex uppercase font-bold max-w-[200px] text-white border border-white mx-auto items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 md:w-full"
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
