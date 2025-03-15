"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { MdNavigateNext } from "react-icons/md"
import { neucha } from "@/styles/fonts"

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
          `${neucha.className} text-lg xl:text-xl uppercase drop-shadow-lg flex justify-between items-center hover:text-amber-400`,
          {
            "text-amber-400": pathname === href,
          }
        )}
      >
        {title} <MdNavigateNext className="opacity-40 lg:hidden" />
      </Link>
    </li>
  )
}
