import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    // const response = await createBooking()
    // return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}
