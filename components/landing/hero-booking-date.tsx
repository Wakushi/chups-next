import { playfairDisplay } from "@/styles/fonts"
import { FaExternalLinkAlt } from "react-icons/fa"
import { timestampToReadableDate } from "@/lib/utils"
import Link from "next/link"
import Copy from "../ui/copy"
import { Timestamp } from "firebase-admin/firestore"
import BookingModal from "../booking/booking-modal"
import { Booking } from "@/lib/types/Booking"

export default function HeroBookingDate({
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
