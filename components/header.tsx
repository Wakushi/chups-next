import Image from "next/image"
import { neucha } from "../styles/fonts"
import Link from "next/link"
import HeaderMenu from "./header-menu"
import { LogOutButton } from "./buttons"
import { getLoggedUser } from "@/lib/auth"

export default async function Header() {
  const user = await getLoggedUser()

  return (
    <div className="p-3 flex items-center justify-between gap-2 w-full fixed bg-[#020817] z-10 shadow-2xl">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo/chups_logo.png"
          width={35}
          height={35}
          style={{ width: "auto", height: "auto" }}
          alt="Chups' logo"
        />
        <span className={`${neucha.className} text-2xl`}>LES CHUP'S</span>
      </Link>
      <div className="flex items-center gap-2">
        <LogOutButton />
        <HeaderMenu user={user} />
      </div>
    </div>
  )
}
