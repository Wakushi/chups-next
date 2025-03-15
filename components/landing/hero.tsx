import { Booking } from "@/lib/types/Booking"
import Image from "next/image"
import FadeDivider from "../fade-divider"

export default function Hero({ bookings }: { bookings: Booking[] }) {
  const now = new Date()

  const incommingShows = bookings
    .filter((booking) => {
      return booking.date.seconds * 1000 > now.getTime()
    })
    .sort((a, b) => b.date.seconds - a.date.seconds)

  const nextShow = incommingShows[0]

  return (
    <div className="relative p-4 flex items-center justify-center flex-col gap-1 min-h-[100vh] bg-slate-400 bg-hero-image bg-cover bg-center">
      {nextShow ? (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-[0.01] backdrop-blur-sm"></div>
          <div className="w-full max-w-[450px] max-h-[80vh] z-[1] flex items-center justify-center">
            <Image
              src={nextShow.image}
              alt={nextShow.title}
              width={400}
              height={0}
              style={{ width: "100%", height: "auto" }}
              sizes="(max-width: 400px) 100vw, 400px"
              className="rounded"
            />
          </div>
        </>
      ) : (
        <h2 className="text-center text-2xl md:text-3xl lg:text-[2rem] drop-shadow-3xl leading-[1.2] max-w-[450px]">
          La troupe de comédie musicale des Chups vous retrouve bientôt pour de
          nouvelles aventures !
        </h2>
      )}
      <FadeDivider />
    </div>
  )
}
