"use client"
import clsx from "clsx"
import Navlink from "./nav-link"
import { useContext, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { RxHamburgerMenu } from "react-icons/rx"
import { Separator } from "./ui/separator"
import { User } from "@/lib/types/User"
import { UserContext } from "@/providers/UserContext"
import { LogoutButton } from "./buttons"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import MusicButton from "./music-player"

export default function HeaderMenu({ user }: { user?: User }) {
  const { logOut } = useContext(UserContext)
  const [open, setOpen] = useState(false)

  function toggleMenu() {
    setOpen((prevState) => !prevState)
    document.body.style.overflow = open ? "auto" : "hidden"
  }

  function onLogOut() {
    toggleMenu()
    logOut()
  }

  const MenuNavigation = () => {
    switch (user?.role) {
      case "admin":
        return (
          <AdminNavigationMenu toggleMenu={toggleMenu} onLogOut={onLogOut} />
        )
      case "user":
        return (
          <MemberNavigationMenu toggleMenu={toggleMenu} onLogOut={onLogOut} />
        )
      default:
        return <GuestNavigationMenu toggleMenu={toggleMenu} />
    }
  }

  return (
    <div className="lg:hidden">
      <div className="relative z-10" onClick={toggleMenu}>
        {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 min-w-full min-h-[100vh] bg-emerald-700 flex px-8 py-20 transition-transform duration-300",
          {
            "transform translate-x-0 opacity-100": open,
            "transform -translate-x-full opacity-0": !open,
          }
        )}
      >
        <nav className="w-full">
          <ul className="flex flex-col justify-center gap-4">
            <MenuNavigation />
          </ul>
        </nav>
      </div>
    </div>
  )
}

function GuestNavigationMenu({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <>
      <Navlink title="Accueil" href="/" onClick={toggleMenu} />
      <Separator />
      <Navlink title="Calendrier" href="/calendar" onClick={toggleMenu} />
      <Separator />
      <Navlink title="Spectacles" href="/shows" onClick={toggleMenu} />
      <Separator />
      <Navlink title="Contact" href="/contact" onClick={toggleMenu} />
      <Separator />
      <Navlink title="FAQ" href="/faq" onClick={toggleMenu} />
      <Separator />
      <Navlink title="Login" href="/login" onClick={toggleMenu} />
      <div className="flex items-center justify-center mt-8">
        <MusicButton />
        <Link
          className="drop-shadow-lg"
          href="https://www.facebook.com/p/Les-Chups-100091876850435/"
          target="_blank"
        >
          <FaFacebook className="text-2xl mr-8 cursor-pointer hover:text-brand" />
        </Link>
        <Link
          className="drop-shadow-lg"
          href="https://www.instagram.com/chupsles"
          target="_blank"
        >
          <FaInstagram className="text-2xl mr-8 cursor-pointer hover:text-brand" />
        </Link>
      </div>
    </>
  )
}

function AdminNavigationMenu({
  toggleMenu,
  onLogOut,
}: {
  toggleMenu: () => void
  onLogOut: () => void
}) {
  return (
    <>
      <Navlink title="Accueil" href="/" onClick={toggleMenu} />
      <Separator />
      <Navlink
        title="Réservations"
        href="/admin/user-bookings"
        onClick={toggleMenu}
      />
      <Separator />
      <Navlink title="Dates" href="/admin/bookings" onClick={toggleMenu} />
      <Separator />
      <LogoutButton logOut={onLogOut} />
    </>
  )
}

function MemberNavigationMenu({
  toggleMenu,
  onLogOut,
}: {
  toggleMenu: () => void
  onLogOut: () => void
}) {
  return (
    <>
      <Navlink title="Accueil" href="/" onClick={toggleMenu} />
      <Navlink title="Chansons" href="/member/songs" onClick={toggleMenu} />
      <Navlink
        title="Documents"
        href="/member/downloads"
        onClick={toggleMenu}
      />
      <LogoutButton logOut={onLogOut} />
    </>
  )
}
