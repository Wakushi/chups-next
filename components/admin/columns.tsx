"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"
import { Timestamp } from "firebase-admin/firestore"
import { timestampToReadableDate } from "@/lib/utils"
import { Checkbox } from "../ui/checkbox"
import { Booking } from "@/lib/types/Booking"
import { IoMdPin } from "react-icons/io"

export const columns: ColumnDef<Booking>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Spectacle
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const title: string = row.getValue("title")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{title}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date: Timestamp = row.getValue("date")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{timestampToReadableDate(date)}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Heure
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const time: string = row.getValue("time")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{time}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Salle
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const location: string = row.getValue("location")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{location}</span>
          <a href={row.original.locationUrl} target="_blank">
            <IoMdPin />
          </a>
        </div>
      )
    },
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ville
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const city: string = row.getValue("city")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{city}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "adultPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prix adulte
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const adultPrice: number = row.getValue("adultPrice")
      return (
        <div className="pl-4 font-medium flex items-center text-center gap-2">
          <span className="pl-10">{adultPrice}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "childPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prix enfant
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const childPrice: number = row.getValue("childPrice")
      return (
        <div className="pl-4 font-medium flex items-center text-center gap-2">
          <span className="pl-10">{childPrice}</span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <div></div>
    },
  },
]
