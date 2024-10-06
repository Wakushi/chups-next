import React from "react"
import * as XLSX from "xlsx"
import { saveAs } from "file-saver"
import { Button } from "@/components/ui/button"
import { UserBooking } from "@/lib/types/UserBooking"
import { Timestamp } from "firebase-admin/firestore"
import { timestampToReadableDate } from "@/lib/utils"
import { PiMicrosoftExcelLogoFill } from "react-icons/pi"

interface ExportButtonProps {
  data: UserBooking[]
}

export default function ExportButton({ data }: ExportButtonProps) {
  function exportToExcel() {
    const exportData = data.map((booking) => ({
      Prénom: booking.firstName,
      Nom: booking.name,
      Email: booking.email,
      "Billets adulte": booking.adultTickets,
      "Billets enfant": booking.childTickets,
      "Prix total": booking.totalPrice,
      Espèces: booking.cash ? "x" : "",
      Chèque: booking.cheque ? "x" : "",
      Commentaire: booking.comment,
      Spectacle: booking.title,
      Ville: booking.city,
      Date: timestampToReadableDate(booking.date as Timestamp),
    }))

    const worksheet = XLSX.utils.json_to_sheet(exportData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Réservations")

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    })

    const excelData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })

    const today = new Date()

    const formattedDate = today
      .toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, "-")
    const filename = `reservations-${formattedDate}.xlsx`

    saveAs(excelData, filename)
  }

  return (
    <Button className="w-full flex items-center gap-1" onClick={exportToExcel}>
      Exporter
      <PiMicrosoftExcelLogoFill className="text-xl text-green-700" />
    </Button>
  )
}
