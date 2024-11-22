import { neucha } from "@/styles/fonts"
import Link from "next/link"
import { IoIosLogOut } from "react-icons/io"

function BookButton() {
  return (
    <Link
      href="/calendar"
      className="bg-gradient-to-r from-red-900 to-red-600 uppercase fixed bottom-0 w-full text-white font-bold text-lg lg:text-2xl shadow-md p-2 text-center"
      style={{
        borderRadius: "0",
      }}
    >
      <span className="drop-shadow-2xl">Réserver</span>
    </Link>
  )
}

function LogoutButton({ logOut }: { logOut: () => void }) {
  return (
    <li
      className={`${neucha.className} text-lg xl:text-xl uppercase shadow-lg flex justify-between items-center gap-2 cursor-pointer`}
      onClick={logOut}
    >
      <span>Déconnexion</span>
      <IoIosLogOut className="opacity-40" />
    </li>
  )
}

export { BookButton, LogoutButton }
