import { CONTACT_EMAIL } from "@/lib/constants"
import { sendMail } from "./mail.service"

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
