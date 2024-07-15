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
        "p-3 flex items-center justify-between gap-2 w-full fixed bg-white bg-opacity-[0.02] shadow-sm backdrop-blur-sm  z-10 shadow-2xl transition-all duration-300",
        {
          "bg-transparent shadow-none backdrop-blur-none bg-opacity-[0]":
            !isHeaderScrolled,
        }
      )}
    >
      {headerContent}
    </div>
  )
}
