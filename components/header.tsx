"use client"
import Image from "next/image"
import { neucha } from "../styles/fonts"
import Link from "next/link"
import HeaderMenu from "./header-menu"
import Navlink from "./nav-link"
import { useContext } from "react"
import { UserContext } from "@/providers/UserContext"
import { User } from "@/lib/types/User"
import { LogoutButton } from "./buttons"

export default function Header() {
  const { user, loadingUser } = useContext(UserContext)

  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <div className="w-[35px] h-[40px] md:w-[45px] md:h-[50px]">
          <Image
            src="/images/logo/chups_logo.png"
            alt="Chups' logo"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            sizes="100vw"
          />
        </div>
        <div
          className={`${neucha.className} text-2xl md:text-3xl leading-none`}
        >
          LES CHUP'S
        </div>
      </Link>
      {!loadingUser && (
        <div className="flex fade-in-top">
          {user && user.role === "admin" ? (
            <AdminNavigation user={user} />
          ) : (
            <GuestNavigation />
          )}
        </div>
      )}
    </>
  )
}

function GuestNavigation() {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden lg:flex">
        <Navlink title="Calendrier" href="/calendar" />
        <Navlink title="Spectacles" href="/shows" />
        <Navlink title="Contact" href="/contact" />
        <Navlink title="FAQ" href="/faq" />
        <Navlink title="Login" href="/login" />
      </div>
      <HeaderMenu />
    </div>
  )
}

function AdminNavigation({ user }: { user: User }) {
  const { logOut } = useContext(UserContext)
  return (
    <div className="flex items-center gap-2">
      <div className="hidden lg:flex">
        <Navlink title="Réservations" href="/admin/user-bookings" />
        <Navlink title="Calendrier" href="/calendar" />
        <LogoutButton logOut={logOut} />
      </div>
      <HeaderMenu user={user} />
    </div>
  )
}
