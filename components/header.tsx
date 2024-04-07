import Image from "next/image"
import { neucha } from "../styles/fonts"
import Link from "next/link"
import HeaderMenu from "./header-menu"
import { LogOutButton } from "./buttons"
import { getLoggedUser } from "@/lib/auth"
import Navlink from "./nav-link"

export default async function Header() {
  const user = await getLoggedUser()

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
        <div className={`${neucha.className} text-2xl md:text-3xl`}>
          LES CHUP'S
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <div className="hidden lg:flex">
          <Navlink title="Calendrier" href="/calendar" />
          <Navlink title="Spectacles" href="/shows" />
          <Navlink title="Contact" href="/contact" />
          <Navlink title="FAQ" href="/faq" />
          {!user && <Navlink title="Login" href="/login" />}
          {user?.role === "admin" && (
            <Navlink title="Admin" href="/admin/dashboard" />
          )}
        </div>
        <LogOutButton />
        <HeaderMenu user={user} />
      </div>
    </>
  )
}
