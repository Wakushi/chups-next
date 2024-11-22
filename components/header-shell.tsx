"use client"

import clsx from "clsx"
import { usePathname } from "next/navigation"

export default function HeaderShell({
  headerContent,
}: {
  headerContent: JSX.Element
}) {
  const pathname = usePathname()
  const isLandingPage = pathname === "/"

  return (
    <div
      className={clsx(
        "p-3 flex items-center justify-between gap-2 w-full fixed backdrop-blur-sm z-10 shadow-sm transition-all duration-300",
        isLandingPage
          ? "bg-teal-600 bg-opacity-[0.2]"
          : "bg-white bg-opacity-[0.01]"
      )}
    >
      {headerContent}
    </div>
  )
}
