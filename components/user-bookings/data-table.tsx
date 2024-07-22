"use client"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "../ui/input"
import { DataTablePagination } from "../ui/data-table-pagination"
import {
  UserBooking,
  UserBookingStatus,
  UserBookingStatusLabel,
} from "@/lib/types/UserBooking"
import { useRouter } from "next/navigation"
import LoaderSmall from "../ui/loader-small/loader-small"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "date",
      desc: true,
    },
  ])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const bookingStatus = Object.values(UserBookingStatus)

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const selectedRowsAmount = table.getFilteredSelectedRowModel().rows.length

  async function updateManyStatus(newStatus: UserBookingStatus): Promise<void> {
    setLoading(true)

    const selectedUserBookings = table
      .getFilteredSelectedRowModel()
      .rows.map((r) => r.original as UserBooking)
      .filter((r) => r.status !== newStatus)

    if (!selectedUserBookings.length) {
      setLoading(false)
      return
    }

    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/user-booking/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userBookings: selectedUserBookings,
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

  return (
    <>
      <h3 className="px-2 text-lg opacity-70">Filtres</h3>
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center w-full gap-2">
          <Input
            placeholder="Nom"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-[200px]"
          />
          <Input
            placeholder="Email"
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="max-w-[200px]"
          />
          <Input
            placeholder="Spectacle"
            value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("title")?.setFilterValue(event.target.value)
            }
            className="max-w-[200px]"
          />
          <Input
            placeholder="Salle"
            value={(table.getColumn("city")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("city")?.setFilterValue(event.target.value)
            }
            className="max-w-[200px]"
          />
          <Select
            value={
              (table.getColumn("status")?.getFilterValue() as string) ?? "all"
            }
            onValueChange={(value) => {
              table
                .getColumn("status")
                ?.setFilterValue(value === "all" ? undefined : value)
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts </SelectItem>
              {bookingStatus.map((status) => (
                <SelectItem key={status} value={status}>
                  {UserBookingStatusLabel[status]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          {loading ? (
            <div className="w-[400px] flex justify-center">
              <LoaderSmall />
            </div>
          ) : (
            <>
              {!!selectedRowsAmount && (
                <Button
                  variant="outline"
                  onClick={() => updateManyStatus(UserBookingStatus.DONE)}
                >
                  Marquer {selectedRowsAmount ? selectedRowsAmount : ""} comme
                  "Traitée"
                </Button>
              )}
              {!!selectedRowsAmount && (
                <Button
                  variant="outline"
                  onClick={() => updateManyStatus(UserBookingStatus.PENDING)}
                >
                  Marquer {selectedRowsAmount ? selectedRowsAmount : ""} comme
                  "À traiter"
                </Button>
              )}
            </>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Colonnes
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  if (column.id === "actions") return null
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {columnsLabels[column.id as keyof typeof columnsLabels]}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="justify-center max-w-[200px]"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucun résultat
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="border-t border-slate-800 flex items-center justify-end space-x-2 p-2">
        <DataTablePagination table={table} />
      </div>
    </>
  )
}

const columnsLabels = {
  email: "Email",
  name: "Nom",
  adultTickets: "Places adultes",
  childTickets: "Places enfants",
  totalPrice: "Prix total",
  date: "Date",
  status: "Statut",
}
