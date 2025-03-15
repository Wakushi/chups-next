import { handlee } from "@/styles/fonts"
import Image from "next/image"

export default function TexturedPostcard() {
  return (
    <div
      className="bg-amber-50 border border-amber-200 shadow-md rounded w-full max-h-[400px] max-w-2xl aspect-[7/5] relative overflow-hidden"
      style={{
        backgroundImage: `
               radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), 
               linear-gradient(rgba(200,200,180,0.07) 1px, transparent 1px), 
               linear-gradient(90deg, rgba(200,200,180,0.07) 1px, transparent 1px)
             `,
        backgroundSize: `20px 20px, 100px 100px, 100px 100px`,
        backgroundPosition: `-10px -10px, 0 0, 0 0`,
      }}
    >
      {/* Vintage overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-amber-50/10 pointer-events-none"></div>

      {/* Slight stain effect */}
      <div className="absolute top-5 left-10 w-24 h-24 rounded-full bg-amber-100/30 blur-xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-20 w-16 h-16 rounded-full bg-amber-100/40 blur-xl pointer-events-none"></div>

      {/* Small fold crease */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-amber-200/50 pointer-events-none"></div>

      {/* Vertical separator */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gray-400/30"></div>

      {/* Left side - Message area */}
      <div className="absolute top-0 left-0 h-full p-4">
        <div
          className={`${handlee.className} h-full flex flex-col pt-4 text-gray-800/80 text-md md:text-3xl md:p-10 font-light leading-relaxed`}
        >
          <p className="mb-4 max-w-[200px] md:max-w-[70%]">
            J'ai une grande nouvelle à vous annoncer, votre présence est
            impérative...
          </p>
          <p className="mb-4">
            Rendez-vous à la maison familiale le week-end du 23 et 24 mai 2025
          </p>
          <div className="mt-auto">
            <p className="text-gray-700 font-medium text-end">
              Mamie Marguerite
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Address area */}
      <div className="absolute top-0 right-0 w-1/2 h-full p-4">
        {/* Stamp area */}
        <div className="absolute top-4 right-4 w-24 h-24 border border-gray-400 border-dashed flex items-center justify-center">
          <div className="rounded rotate-6 scale-125 w-full h-full bg-gray-200/50 flex items-center justify-center">
            <Image
              src="/images/timbre.png"
              alt="Timbre"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded rotate-6"
            />
          </div>
        </div>

        {/* Address lines */}
        <div className="absolute top-1/2 left-4 right-28 transform -translate-y-1/2 opacity-15">
          <div className="border-b border-gray-400 mb-4 h-6"></div>
          <div className="border-b border-gray-400 mb-4 h-6"></div>
          <div className="border-b border-gray-400 mb-4 h-6"></div>
          <div className="border-b border-gray-400 h-6"></div>
        </div>

        {/* Postmark effect */}
        <div className="absolute top-16 right-24 w-16 h-16 opacity-30 pointer-events-none">
          <div className="rounded-full border border-gray-600 w-full h-full flex items-center justify-center overflow-hidden">
            <div className="text-gray-600 text-xs text-center font-mono rotate-12 opacity-30">
              <p>POSTE</p>
              <p>15.03.25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
