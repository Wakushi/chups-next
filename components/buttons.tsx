import Link from "next/link"

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

export { BookButton }
