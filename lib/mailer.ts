import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendMail(to: string, subject: string, text: string) {
  const mailOptions = {
    from: "chupscontact@gmail.com",
    to: to,
    subject: subject,
    text: text,
  }

  const info = await transporter.sendMail(mailOptions)
  return info
}
