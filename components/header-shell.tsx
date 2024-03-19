"use client"

import clsx from "clsx"
import { useEffect, useState } from "react"

export default function HeaderShell({
  headerContent,
}: {
  headerContent: JSX.Element
}) {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsHeaderScrolled(true)
      } else {
        setIsHeaderScrolled(false)
      }
    })
  }, [])
  return (
    <div
      className={clsx(
        "p-3 flex items-center justify-between gap-2 w-full fixed bg-[#020817] z-10 shadow-2xl transition-all duration-300",
        {
          "bg-opacity-10": !isHeaderScrolled,
        }
      )}
    >
      {headerContent}
    </div>
  )
}
