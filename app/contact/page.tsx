import ContactForm from "@/components/contact/contact-form"
import Copy from "@/components/ui/copy"
import { playfairDisplay } from "@/styles/fonts"
import Link from "next/link"
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { TbMessageCircleHeart } from "react-icons/tb"

export default function ContactPage() {
  return (
    <div className="py-20 px-4 flex flex-col gap-4 min-h-[100vh] bg-slate-900">
      <h1 className={`${playfairDisplay.className} text-3xl`}>Contact</h1>
      <ContactInfo />
      <h2
        className={`${playfairDisplay.className} text-2xl drop-shadow-3xl flex items-center gap-2`}
      >
        <span>Laissez nous un message</span>
        <TbMessageCircleHeart />
      </h2>
      <ContactForm />
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
