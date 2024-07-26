import { fetchAuditoriums } from "@/services/auditorium.service"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await fetchAuditoriums()
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}
