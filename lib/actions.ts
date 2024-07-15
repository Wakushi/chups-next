"use server"
import { getBookingTemplate, sendMail } from "@/services/mail.service"
import { CONTACT_EMAIL } from "./constants"
import { Booking } from "./types/Booking"

export async function sendContactMessage(body: any) {
  const { email, message, name, subject } = body

  try {
    if (!name || !email || !message || !subject) {
      throw new Error("Missing required fields")
    }
    const emailContent = `
    Date: ${new Date().toLocaleString()}
    Nom: ${name}
    Email: ${email}

    ${message}
  `

    await sendMail(
      CONTACT_EMAIL,
      `Formulaire de contact: ${subject}`,
      emailContent
    )

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}

export async function bookShow({
  email,
  name,
  adultTickets,
  childTickets,
  show,
}: {
  email: string
  name: string
  adultTickets: number
  childTickets: number
  show: Booking
}) {
  try {
    if (!name || !email || !adultTickets) {
      throw new Error("Missing required fields")
    }
    const totalPrice =
      adultTickets * show.adultPrice + childTickets * show.childPrice

    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    }

    const showDate = new Date(show.date)
    const formattedDate = showDate.toLocaleDateString("fr-FR", dateOptions)

    const emailContent = `
        Date: ${new Date().toLocaleString()}
        Réservation pour le spectacle: ${show.title} du ${formattedDate} à ${
      show.location
    }.
        Réserver par: ${name} - ${email}
        Places adultes: ${adultTickets}
        Places enfant: ${childTickets}
        Prix total: ${totalPrice}€
      `

    await sendMail(
      email,
      `Confirmation: Réservation pour le spectacle "${show.title}" du ${formattedDate} à ${show.city}`,
      getBookingTemplate({ show, formattedDate, totalPrice })
    )

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
