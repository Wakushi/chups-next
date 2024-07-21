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

  return (
    <div className="lg:hidden">
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
            {!user && (
              <>
                <Navlink title="Accueil" href="/" onClick={toggleMenu} />
                <Separator />
                <Navlink
                  title="Calendrier"
                  href="/calendar"
                  onClick={toggleMenu}
                />
                <Separator />
                <Navlink
                  title="Spectacles"
                  href="/shows"
                  onClick={toggleMenu}
                />
                <Separator />
                <Navlink title="Contact" href="/contact" onClick={toggleMenu} />
                <Separator />
                <Navlink title="FAQ" href="/faq" onClick={toggleMenu} />
                <Separator />
                <Navlink title="Login" href="/login" onClick={toggleMenu} />
              </>
            )}
            {user?.role === "admin" && (
              <>
                <Navlink
                  title="Réservations"
                  href="/admin/user-bookings"
                  onClick={toggleMenu}
                />
                <Separator />
                <Navlink
                  title="Calendrier"
                  href="/calendar"
                  onClick={toggleMenu}
                />
                <Separator />
                <LogoutButton logOut={onLogOut} />
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}
