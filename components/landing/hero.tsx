import { playfairDisplay } from "@/styles/fonts"
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Copy from "../ui/copy"

export default function Hero() {
  return (
    <div className="p-4 flex items-center justify-center flex-col gap-1 w-auto min-h-[100dvh] bg-hero-image bg-cover bg-center">
      <p className="text-center text-lg md:text-xl lg:text-[2rem] drop-shadow-3xl leading-[1.2]">
        Les Chup's vous présentent leur nouveau spectacle musical
      </p>
      <h2
        className={`${playfairDisplay.className} uppercase text-[4rem] lg:text-[6rem] text-center leading-[0.9] my-6 drop-shadow-3xl animate-fade-in-zoom opacity-0`}
      >
        Mystère au cabaret
      </h2>
      <p className="text-center md:text-xl lg:text-[2rem] lg:mb-4 drop-shadow-3xl">
        Vendredi 24 et Samedi 25 Mai 2024 à 20h30
      </p>
      <div className="flex flex-col lg:gap-2">
        <h3
          className={`${playfairDisplay.className} text-center text-bold uppercase text-xl md:text-2xl lg:text-[2.5rem] drop-shadow-3xl`}
        >
          Espace Culturel Lucien Jean
        </h3>
        <h3
          className={`${playfairDisplay.className} uppercase text-center text-2xl md:text-3xl lg:text-[2.6rem] drop-shadow-3xl`}
        >
          Marly-la-ville
        </h3>
      </div>
      <div className="flex flex-col mt-2 lg:mt-8 lg:gap-4">
        <div className="flex items-center justify-center gap-2">
          <Link
            href="tel:0611846005"
            className="flex items-center gap-2 text-bold text-center md:text-lg lg:text-[2rem] drop-shadow-3xl"
          >
            <FaPhoneAlt />
            <span>06.11.84.60.05</span>
          </Link>
          <Copy contentToCopy="0611846005" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link
            href="mailto:leschups@outlook.fr"
            className="flex items-center justify-center gap-2 text-bold text-center md:text-lg lg:text-[2rem] drop-shadow-3xl"
          >
            <MdEmail />
            <span>leschups@outlook.fr</span>
          </Link>
          <Copy contentToCopy="leschups@outlook.fr" />
        </div>
      </div>
    </div>
  )
}
