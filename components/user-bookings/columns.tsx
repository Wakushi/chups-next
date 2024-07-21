"use client"
import {
  UserBooking,
  UserBookingStatus,
  UserBookingStatusLabel,
} from "@/lib/types/UserBooking"
import { ColumnDef } from "@tanstack/react-table"
import Copy from "../ui/copy"
import clsx from "clsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "../ui/button"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import LoaderSmall from "../ui/loader-small/loader-small"
import { Timestamp } from "firebase/firestore"
import { timestampToReadableDate } from "@/lib/utils"
import { FaTrash } from "react-icons/fa"

export const columns: ColumnDef<UserBooking>[] = [
  {
    accessorKey: "name",
    header: () => <div className="text-left">Nom</div>,
    cell: ({ row }) => {
      const name: string = row.getValue("name")
      return (
        <div className="text-left font-medium flex items-center gap-2">
          <span>{name}</span>
          <Copy contentToCopy={name} />
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left">Email</div>,
    cell: ({ row }) => {
      const email: string = row.getValue("email")
      return (
        <div className="text-left font-medium flex items-center gap-2">
          <span>{email}</span>
          <Copy contentToCopy={email} />
        </div>
      )
    },
  },
  {
    accessorKey: "adultTickets",
    header: () => <div className="text-left">Places adulte</div>,
    cell: ({ row }) => {
      const adultTickets: string = row.getValue("adultTickets")
      return (
        <div className="text-left font-medium flex items-center gap-2">
          <span>{adultTickets}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "childTickets",
    header: () => <div className="text-left">Places enfant</div>,
    cell: ({ row }) => {
      const childTickets: string = row.getValue("childTickets")
      return (
        <div className="text-left font-medium flex items-center gap-2">
          <span>{childTickets}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div className="text-left">Prix total</div>,
    cell: ({ row }) => {
      const totalPrice: string = row.getValue("totalPrice")
      return (
        <div className="text-left font-medium flex items-center gap-2">
          <span>
            {totalPrice}
            <span className="opacity-60">€</span>{" "}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "date",
    header: () => <div className="text-left">Réservé le</div>,
    cell: ({ row }) => {
      const date: Timestamp = row.getValue("date")
      return (
        <div className="text-left font-medium flex items-center gap-2">
          <span>{timestampToReadableDate(date)}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Statut</div>,
    cell: ({ row }) => {
      const status: UserBookingStatus = row.getValue("status")
      return (
        <div className="text-left font-medium flex items-center gap-2">
          <span>{UserBookingStatusLabel[status]}</span>
          <div
            className={clsx("w-2 h-2 rounded-full", {
              "bg-red-600": status === UserBookingStatus.PENDING,
              "bg-green-600": status === UserBookingStatus.DONE,
            })}
          ></div>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const router = useRouter()
      const userBooking = row.original
      const [loading, setLoading] = useState<boolean>(false)
      const [isDeleteDialogOpen, setIsDeleteDialogOpen] =
        useState<boolean>(false)

      async function updateStatus(newStatus: UserBookingStatus): Promise<void> {
        setLoading(true)
        try {
          await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/user-booking`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...userBooking,
                status: newStatus,
              }),
            }
          )
          router.refresh()
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

      async function deleteUserBooking(): Promise<void> {
        setLoading(true)
        try {
          await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/user-booking?id=${userBooking.id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          router.refresh()
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

      if (loading) {
        return (
          <div className="scale-50">
            <LoaderSmall />
          </div>
        )
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Ouvrir le menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <AlertDialog
              open={isDeleteDialogOpen}
              onOpenChange={setIsDeleteDialogOpen}
            >
              {userBooking.status === UserBookingStatus.DONE && (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => updateStatus(UserBookingStatus.PENDING)}
                >
                  Marquer comme "À traiter"
                </DropdownMenuItem>
              )}
              {userBooking.status === UserBookingStatus.PENDING && (
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => updateStatus(UserBookingStatus.DONE)}
                >
                  Marquer comme "Traitée"
                </DropdownMenuItem>
              )}
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  className="text-red-600 cursor-pointer"
                  onSelect={(event) => {
                    event.preventDefault()
                    setIsDeleteDialogOpen(true)
                  }}
                >
                  <FaTrash className="mr-2" />
                  Supprimer
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Cette action est irréversible et supprimera la réservation.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      deleteUserBooking()
                      setIsDeleteDialogOpen(false)
                    }}
                  >
                    Supprimer
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
