"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { MdNavigateNext } from "react-icons/md"
import { playfairDisplay } from "@/styles/fonts"

interface NavlinkProps {
  title: string
  href: string
  onClick?: () => void
}
export default function Navlink({ title, href, onClick }: NavlinkProps) {
  const pathname = usePathname()

  return (
    <li className="lg:mr-8" onClick={onClick}>
      <Link
        href={href}
        className={clsx(
          `${playfairDisplay.className} text-[2rem] lg:text-[1.5rem] uppercase flex justify-between items-center hover:text-brand`,
          {
            "text-brand": pathname === href,
          }
        )}
      >
        {title} <MdNavigateNext className="opacity-40 lg:hidden" />
      </Link>
    </li>
  )
}
