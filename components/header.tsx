"use client"
import Image from "next/image"
import { neucha } from "../styles/fonts"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { Separator } from "./ui/separator"
import clsx from "clsx"
import Navlink from "./nav-link"
import Link from "next/link"

export default function Header() {
  return (
    <div className="p-3 flex items-center justify-between gap-2 w-full fixed bg-[#020817] z-10 shadow-2xl">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo/chups_logo.png"
          width={35}
          height={35}
          className=""
          alt="Chups' logo"
        />
        <span className={`${neucha.className} text-2xl`}>LES CHUP'S</span>
      </Link>
      <HeaderMenu />
    </div>
  )
}

function HeaderMenu() {
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
            <Navlink title="Les Chup's" href="/about" onClick={toggleMenu} />
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
