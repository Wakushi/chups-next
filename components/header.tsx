import Image from "next/image"
import { neucha } from "../styles/fonts"

export default function Header() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo/chups_logo.png"
          width={35}
          height={35}
          className=""
          alt="Chups' logo"
        />
        <span className={`${neucha.className} text-2xl`}>LES CHUP'S</span>
      </div>
    </div>
  )
}
