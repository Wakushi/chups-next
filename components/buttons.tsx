import { auth, signOut } from "@/lib/auth"
import Link from "next/link"
import { AiOutlinePoweroff } from "react-icons/ai"

function BookButton() {
  return (
    <Link
      href="/calendar"
      className="bg-gradient-to-r from-red-900 to-red-600 uppercase fixed bottom-0 w-full text-white font-bold text-lg shadow-md p-2 text-center"
      style={{
        borderRadius: "0",
      }}
    >
      <span className="drop-shadow-2xl">Réserver</span>
    </Link>
  )
}

async function LogOutButton() {
  const session = await auth()
  if (!session?.user) return null
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <AiOutlinePoweroff className="w-6 h-6" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  )
}

export { BookButton, LogOutButton }
