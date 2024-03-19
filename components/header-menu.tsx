"use client"

import clsx from "clsx"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import Navlink from "./nav-link"
import { Separator } from "@radix-ui/react-separator"

export default function HeaderMenu() {
  const [open, setOpen] = useState(false)

  function toggleMenu() {
    setOpen((prevState) => !prevState)
    document.body.style.overflow = open ? "auto" : "hidden"
  }

  return (
    <div>
      <div className="relative z-10" onClick={toggleMenu}>
        {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 min-w-full min-h-[100vh] bg-slate-950 flex px-8 py-20 transition-transform duration-300",
          {
            "transform translate-x-0": open,
            "transform -translate-x-full": !open,
          }
        )}
      >
        <nav className="w-full">
          <ul className="flex flex-col justify-center gap-6">
            <Navlink title="Accueil" href="/" onClick={toggleMenu} />
            <Separator />
            <Navlink title="Calendrier" href="/calendar" onClick={toggleMenu} />
            <Separator />
            <Navlink title="Spectacles" href="/shows" onClick={toggleMenu} />
            <Separator />
            <Navlink title="Contact" href="/contact" onClick={toggleMenu} />
            <Separator />
            <Navlink title="FAQ" href="/faq" onClick={toggleMenu} />
          </ul>
        </nav>
      </div>
    </div>
  )
}
