"use client"
import ContactForm from "@/components/contact/contact-form"
import Copy from "@/components/ui/copy"
import LoaderHive from "@/components/ui/loader-hive/loader-hive"
import { playfairDisplay } from "@/styles/fonts"
import Link from "next/link"
import { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail, MdNavigateNext } from "react-icons/md"
import { TbMessageCircleHeart } from "react-icons/tb"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const ContactFormState = () => {
    if (isSubmitting) {
      return (
        <div className="relative h-[300px]">
          <LoaderHive />
        </div>
      )
    }

    if (isSuccess) {
      return (
        <div className="flex flex-col gap-4 items-center justify-center h-[300px]">
          <p className="text-3xl p-4 text-center">Merci pour votre message !</p>
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
      <ContactForm
        setIsSubmitting={setIsSubmitting}
        setIsSuccess={setIsSuccess}
      />
    )
  }

  return (
    <div className="py-20 md:py-[6rem] px-4 min-h-[100vh] bg-slate-900">
      <div className="max-w-[600px] flex flex-col gap-4 m-auto">
        <h1
          className={`${playfairDisplay.className} text-3xl md:text-[3rem] md:mb-4`}
        >
          Contact
        </h1>
        <ContactInfo />
        <h2
          className={`${playfairDisplay.className} text-2xl drop-shadow-3xl flex items-center gap-2`}
        >
          <span>Laissez nous un message</span>
          <TbMessageCircleHeart />
        </h2>
        <ContactFormState />
      </div>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-2 text-xl">
        <Link
          href="tel:0611846005"
          className="flex items-center gap-2 text-bold text-center drop-shadow-3xl"
        >
          <FaPhoneAlt />
          <span>06.11.84.60.05</span>
        </Link>
        <Copy contentToCopy="0611846005" />
      </div>
      <div className="flex items-center gap-2 text-xl">
        <Link
          href="mailto:leschups@outlook.fr"
          className="flex items-center justify-center gap-2 text-bold text-center drop-shadow-3xl"
        >
          <MdEmail />
          <span>leschups@outlook.fr</span>
        </Link>
        <Copy contentToCopy="leschups@outlook.fr" />
      </div>
    </div>
  )
}
