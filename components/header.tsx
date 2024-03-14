"use client"
import Image from "next/image"
import { neucha } from "../styles/fonts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"

export default function Header() {
  return (
    <div className="p-3 flex items-center justify-between gap-2 w-full fixed bg-[#020817] z-10 shadow-2xl">
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
      <HeaderDropdown />
    </div>
  )
}

function HeaderDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu onOpenChange={() => setOpen((prevState) => !prevState)}>
      <DropdownMenuTrigger>
        {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
