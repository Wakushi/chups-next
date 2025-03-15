import { playfairDisplay } from "@/styles/fonts"
import BookingList from "../booking/booking-list"
import Link from "next/link"
import { Booking } from "@/lib/types/Booking"
import Image from "next/image"

export default function AgendaSection({ bookings }: { bookings: Booking[] }) {
  return (
    <section className="bg-emerald-900 relative overflow-hidden w-auto">
      <div className="flex py-20 px-4 min-h-[100vh] justify-center items-center flex-col gap-2 md:gap-4 relative z-[1]">
        <h2
          className={`${playfairDisplay.className} uppercase text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] text-center leading-[0.9] my-6 drop-shadow-lg`}
        >
          Agenda
        </h2>
        <BookingList bookings={bookings} max={2} />
        <Link href="/calendar" className="underline md:text-xl">
          Voir plus de dates
        </Link>
      </div>
      <div className="w-[800px] absolute left-[-250px] bottom-[-5%]">
        <Image
          src="/images/flowers-left.webp"
          alt="Flower"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="w-[800px] absolute right-[-250px] bottom-[-5%]">
        <Image
          src="/images/flowers-right.webp"
          alt="Flower"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </section>
  )
}
