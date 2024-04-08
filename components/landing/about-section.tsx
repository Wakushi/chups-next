import { playfairDisplay } from "@/styles/fonts"
import WaveSeparator from "../ui/wave-separator"

export default function AboutSection() {
  return (
    <div className="w-auto bg-about-image bg-cover bg-center min-h-[100vh] ">
      <div className="bg-[#111111b0] min-h-[100vh] w-auto relative  flex items-center justify-center flex-col gap-2 px-4">
        <WaveSeparator />
        <div className="flex flex-col gap-2 mb-4">
          <h3
            className={`${playfairDisplay.className} uppercase text-[2rem] md:text-[2.7rem] lg:text-[4rem] lg:mb-2 text-center leading-[0.9] drop-shadow-3xl`}
          >
            Mystère au Cabaret
          </h3>
          <p className="text-center drop-shadow-3xl text-xl md:text-2xl lg:text-3xl font-bold">
            Spectacle musical des Chup's
          </p>
        </div>
        <p className="text-center md:text-2xl drop-shadow-3xl text-slate-200 font-extralight max-w-[600px] lg:max-w-[700px]">
          Chaque année la troupe des Chup's vous propose une{" "}
          <span className="font-medium text-brand">création originale</span>{" "}
          autour de <span className="font-medium text-brand">chansons</span>{" "}
          françaises et internationales, de la{" "}
          <span className="font-medium text-brand">comédie</span>, des{" "}
          <span className="font-medium text-brand">chorégraphies</span>...
        </p>
        <p className="text-center md:text-2xl drop-shadow-3xl font-extralight max-w-[600px] lg:max-w-[700px]">
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
