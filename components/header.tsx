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
import { FaFacebook, FaInstagram } from "react-icons/fa"
import MusicButton from "./music-player"

export default function Header() {
  const { user, loadingUser } = useContext(UserContext)

  const Navigation = () => {
    switch (user?.role) {
      case "admin":
        return <AdminNavigation user={user} />
      case "user":
        return <MemberNavigation user={user} />
      default:
        return <GuestNavigation />
    }
  }

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
      {!loadingUser && <Navigation />}
    </>
  )
}

function GuestNavigation() {
  return (
    <div className="flex items-center gap-2">
      <div className="hidden lg:flex items-center">
        <Navlink title="Accueil" href="/" />
        <Navlink title="Calendrier" href="/calendar" />
        <Navlink title="Spectacles" href="/shows" />
        <Navlink title="Contact" href="/contact" />
        <Navlink title="FAQ" href="/faq" />
        <Navlink title="Login" href="/login" />
        <div className="flex items-center">
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
        <Navlink title="Accueil" href="/" />
        <Navlink title="Réservations" href="/admin/user-bookings" />
        <Navlink title="Dates" href="/admin/bookings" />
        <Navlink title="Documents" href="/member/downloads" />
        <LogoutButton logOut={logOut} />
      </div>
      <HeaderMenu user={user} />
    </div>
  )
}

function MemberNavigation({ user }: { user: User }) {
  const { logOut } = useContext(UserContext)
  return (
    <div className="flex items-center gap-2">
      <div className="hidden lg:flex">
        <Navlink title="Accueil" href="/" />
        <Navlink title="Chansons" href="/member/songs" />
        <Navlink title="Documents" href="/member/downloads" />
        <LogoutButton logOut={logOut} />
      </div>
      <HeaderMenu user={user} />
    </div>
  )
}
