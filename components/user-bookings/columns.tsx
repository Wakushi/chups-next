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
import { AlertDialog } from "@/components/ui/alert-dialog"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "../ui/button"
import { ArrowUpDown, Edit, MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import LoaderSmall from "../ui/loader-small/loader-small"
import { Timestamp } from "firebase-admin/firestore"
import { timestampToReadableDate } from "@/lib/utils"
import { FaInfoCircle } from "react-icons/fa"
import { Checkbox } from "../ui/checkbox"
import BookingPoster from "../booking/booking-poster"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Textarea } from "../ui/textarea"

export const columns: ColumnDef<UserBooking>[] = [
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
    accessorKey: "city",
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
      const city: string = row.getValue("city")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{city}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prénom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const firstName: string = row.getValue("firstName")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{firstName}</span>
          <Copy contentToCopy={firstName} />
        </div>
      )
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const name: string = row.getValue("name")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{name}</span>
          <Copy contentToCopy={name} />
        </div>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const email: string = row.getValue("email")
      return (
        <div className="pl-4 w-[200px] font-medium flex items-center gap-2 overflow-hidden text-ellipsis">
          <span className="truncate">{email}</span>
          <Copy contentToCopy={email} />
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
          Date spectacle
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const userBooking = row.original
      const date: Timestamp = row.getValue("date")
      return (
        <div className="pl-4 w-[120px] font-medium flex items-center gap-2">
          <span>{timestampToReadableDate(date, "short")}</span>
          <HoverCard>
            <HoverCardTrigger>
              <FaInfoCircle className="cursor-pointer" />
            </HoverCardTrigger>
            <HoverCardContent className="flex justify-center items-center">
              <BookingPoster
                title={userBooking.title}
                image={userBooking.image}
              />
            </HoverCardContent>
          </HoverCard>
        </div>
      )
    },
  },
  {
    accessorKey: "adultTickets",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="max-w-[200px] text-wrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Places adulte
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const adultTickets: string = row.getValue("adultTickets")
      return (
        <div className="justify-center font-medium flex items-center gap-2 max-w-[40px] m-auto">
          <span>{adultTickets}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "childTickets",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="max-w-[200px] text-wrap"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Places enfant
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const childTickets: string = row.getValue("childTickets")
      return (
        <div className="justify-center font-medium flex items-center gap-2 max-w-[40px] m-auto">
          <span>{childTickets}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "totalPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Prix total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const totalPrice: string = row.getValue("totalPrice")
      return (
        <div className="justify-center font-medium flex items-center gap-2">
          <span>
            {totalPrice}
            <span className="opacity-60">€</span>{" "}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "cheque",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Chèque
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const router = useRouter()
      const [checked, setChecked] = useState<boolean>(row.getValue("cheque"))
      const [loading, setLoading] = useState<boolean>(false)

      async function updatePaysInCheque(usesCheque: boolean): Promise<void> {
        const userBooking = row.original
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
                userBooking: {
                  ...userBooking,
                  cheque: usesCheque,
                },
              }),
            }
          )

          router.refresh()
          setChecked(usesCheque)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="justify-center flex items-center w-[100px]">
          {loading ? (
            <div className="scale-50">
              <LoaderSmall />
            </div>
          ) : (
            <Checkbox
              checked={checked}
              onCheckedChange={(checked: boolean) =>
                updatePaysInCheque(checked)
              }
            />
          )}
        </div>
      )
    },
    sortingFn: (rowA, rowB, columnId) => {
      const usesChequeA = rowA.getValue(columnId) as boolean
      const usesChequeB = rowB.getValue(columnId) as boolean

      if (!usesChequeA && usesChequeB) {
        return -1
      }

      if (usesChequeA && !usesChequeB) {
        return 1
      }

      return 0
    },
  },
  {
    accessorKey: "cash",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Espèces
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const router = useRouter()
      const [checked, setChecked] = useState<boolean>(row.getValue("cash"))
      const [loading, setLoading] = useState<boolean>(false)

      async function updatePaysInCash(usesCash: boolean): Promise<void> {
        const userBooking = row.original
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
                userBooking: {
                  ...userBooking,
                  cash: usesCash,
                },
              }),
            }
          )

          router.refresh()
          setChecked(usesCash)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="justify-center flex items-center w-[100px]">
          {loading ? (
            <div className="scale-50">
              <LoaderSmall />
            </div>
          ) : (
            <Checkbox
              checked={checked}
              onCheckedChange={(checked: boolean) => updatePaysInCash(checked)}
            />
          )}
        </div>
      )
    },
    sortingFn: (rowA, rowB, columnId) => {
      const usesCashA = rowA.getValue(columnId) as boolean
      const usesCashB = rowB.getValue(columnId) as boolean

      if (!usesCashA && usesCashB) {
        return -1
      }

      if (usesCashA && !usesCashB) {
        return 1
      }

      return 0
    },
  },
  {
    accessorKey: "comment",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Observations
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const router = useRouter()
      const [comment, setComment] = useState<string>(
        row.getValue("comment") || ""
      )
      const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
      const [loading, setLoading] = useState<boolean>(false)

      const truncatedComment =
        comment.length > 50 ? `${comment.substring(0, 50)}...` : comment

      const handleSave = async (mode: "add" | "delete" = "add") => {
        const userBooking = row.original
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
                userBooking: {
                  ...userBooking,
                  comment: mode === "add" ? comment : "",
                },
              }),
            }
          )

          if (mode === "delete") {
            setComment("")
          }

          router.refresh()
          setIsDialogOpen(false)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }

      return (
        <div className="pl-4 w-[200px] font-medium flex items-center gap-2">
          <span className="truncate">{truncatedComment || "..."}</span>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Modifier le commentaire</DialogTitle>
              </DialogHeader>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Entrez votre commentaire ici..."
                rows={5}
              />
              {loading ? (
                <LoaderSmall />
              ) : (
                <div className="w-full flex flex-col gap-1">
                  <Button onClick={() => handleSave("add")}>Enregistrer</Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleSave("delete")}
                  >
                    Effacer
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )
    },
  },
  {
    accessorKey: "bookingDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Réservé le
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const bookingDate: Timestamp = row.getValue("bookingDate")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <span>{timestampToReadableDate(bookingDate, "short")}</span>
        </div>
      )
    },
    sortingFn: (rowA, rowB, columnId) => {
      const dateA = rowA.getValue(columnId) as Timestamp
      const dateB = rowB.getValue(columnId) as Timestamp
      return (
        dateA.seconds - dateB.seconds || dateA.nanoseconds - dateB.nanoseconds
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status: UserBookingStatus = row.getValue("status")
      return (
        <div className="pl-4 font-medium flex items-center gap-2">
          <div
            className={clsx("w-2 h-2 rounded-full", {
              "bg-red-600 shadow-red-dot": status === UserBookingStatus.PENDING,
              "bg-green-600 shadow-green-dot":
                status === UserBookingStatus.DONE,
            })}
          ></div>
          <span>{UserBookingStatusLabel[status]}</span>
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
                userBooking: {
                  ...userBooking,
                  status: newStatus,
                },
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
                  className="cursor-pointer p-2"
                  onClick={() => updateStatus(UserBookingStatus.PENDING)}
                >
                  Marquer comme "À traiter"
                </DropdownMenuItem>
              )}
              {userBooking.status === UserBookingStatus.PENDING && (
                <DropdownMenuItem
                  className="cursor-pointer p-2"
                  onClick={() => updateStatus(UserBookingStatus.DONE)}
                >
                  Marquer comme "Traitée"
                </DropdownMenuItem>
              )}
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
