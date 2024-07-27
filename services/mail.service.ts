import { CONTACT_EMAIL } from "@/lib/constants"
import { Booking } from "@/lib/types/Booking"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendMail(to: string, subject: string, template: string) {
  const mailOptions: Mail.Options = {
    from: CONTACT_EMAIL,
    to: to,
    subject,
    html: template,
  }

  const info = await transporter.sendMail(mailOptions)
  return info
}

export function getBookingTemplate({
  confirmationId,
  email,
  show,
  formattedDate,
  totalPrice,
}: {
  confirmationId: string
  email: string
  show: Booking
  formattedDate: string
  totalPrice: number
}): string {
  const confirmUrl = `${process.env.NEXT_PUBLIC_APP_URL}/confirm-booking?id=${confirmationId}&email=${email}`
  console.log('confirmUrl: ', confirmUrl)

  return `
  <html>
    <body>
      <div style="font-family: Arial, sans-serif; color: #333; text-align: center; padding: 20px; max-width:700px; margin: 0 auto;">
        <h1 style="color: #1E90FF;">Merci pour votre réservation !</h1>
        <p>Nous vous confirmons la bonne réception de votre réservation pour le spectacle:</p> 
        <p><strong>${show.title}</strong> du <strong>${formattedDate}</strong> à <strong>${show.city}</strong> (<strong>${show.location}</strong>).</p>
        <p>Nous vous rappelons que le montant (total <strong>${totalPrice}€</strong>) des places sera à régler sur place, en espèces ou chèque.</p>
        <p>Veuillez cliquer sur le bouton ci-dessous pour confirmer votre réservation :</p>
        <a href=${confirmUrl} style="background-color: #1E90FF; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px;">Confirmer la Réservation</a>
        <p>À bientôt,</p>
        <p>La troupe de comédie musicale des Chups</p>
      </div>
    </body>
  </html>
`
}
