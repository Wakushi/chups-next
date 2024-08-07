import { sendContactMessage } from "@/services/contact.service"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const response = await sendContactMessage(body)
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}
