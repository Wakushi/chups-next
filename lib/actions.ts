"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { AuthError } from "next-auth"
import { signIn } from "./auth"
import { sendMail } from "./mailer"

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials."
        default:
          return "Something went wrong."
      }
    }
    throw error
  } finally {
    revalidatePath("/admin/dashboard")
    redirect("/admin/dashboard")
  }
}

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
      "chupscontact@gmail.com",
      `Formulaire de contact: ${subject}`,
      emailContent
    )

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}

export async function bookShow(body: any) {
  const { email, name, adultTickets, childTickets, show } = body

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
      "chupscontact@gmail.com",
      `Réservation: ${show.title} - ${name}`,
      emailContent
    )

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}
