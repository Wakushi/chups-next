import Image from "next/image"
import { neucha } from "../styles/fonts"
import Link from "next/link"
import HeaderMenu from "./header-menu"
import { LogOutButton } from "./buttons"
import { getLoggedUser } from "@/lib/auth"

export default async function Header() {
  const user = await getLoggedUser()

  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo/chups_logo.png"
          width={32}
          height={32}
          alt="Chups' logo"
        />
        <span className={`${neucha.className} text-2xl`}>LES CHUP'S</span>
      </Link>
      <div className="flex items-center gap-2">
        <LogOutButton />
        <HeaderMenu user={user} />
      </div>
    </>
  )
}
