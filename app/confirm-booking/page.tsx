import {
  createUserBooking,
  deleteUnconfirmedUserBooking,
  getUnconfirmedUserBookingByConfirmationId,
} from "@/services/user-booking.service"
import { playfairDisplay } from "@/styles/fonts"
import Link from "next/link"
import { MdNavigateNext } from "react-icons/md"

export default async function ConfirmBookingPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  async function validateBooking(): Promise<{ success: boolean }> {
    if (!searchParams || !searchParams.id || !searchParams.email)
      return { success: false }

    const unconfirmedUserBooking =
      await getUnconfirmedUserBookingByConfirmationId(searchParams.id as string)

    if (
      !unconfirmedUserBooking ||
      searchParams.email !== unconfirmedUserBooking.email
    ) {
      return { success: false }
    }

    await deleteUnconfirmedUserBooking(unconfirmedUserBooking.id!)
    delete unconfirmedUserBooking.id
    await createUserBooking(unconfirmedUserBooking)
    return { success: true }
  }

  const result = await validateBooking()

  if (!result.success) {
    return (
      <div className="py-20 md:py-[8rem] px-4 h-[100vh] flex flex-col justify-center items-center gap-8">
        <h1
          className={`${playfairDisplay.className} text-3xl md:text-[3rem] md:mb-2`}
        >
          Une erreur est survenue
        </h1>
        <p className={`${playfairDisplay.className} text-xl md:text-2xl`}>
          Cette réservation n'existe pas ou a déjà été confirmée.
        </p>
        <Link
          href="/"
          className="text-[1rem] lg:text-[1rem] border border-white rounded px-4 py-2 flex items-center gap-2 opacity-70 hover:opacity-100"
        >
          Retour à l'accueil <MdNavigateNext />
        </Link>
      </div>
    )
  }

  return (
    <div className="py-20 md:py-[8rem] px-4 h-[100vh] flex flex-col justify-center items-center gap-8">
      <h1
        className={`${playfairDisplay.className} text-3xl md:text-[3rem] md:mb-2`}
      >
        Votre réservation est confirmée !
      </h1>
      <p className={`${playfairDisplay.className} text-xl md:text-2xl`}>
        Nous avons hâte de vous retrouver, à très bientôt
      </p>
      <Link
        href="/"
        className="text-[1rem] lg:text-[1rem] border border-white rounded px-4 py-2 flex items-center gap-2 opacity-70 hover:opacity-100"
      >
        Retour à l'accueil <MdNavigateNext />
      </Link>
    </div>
  )
}
