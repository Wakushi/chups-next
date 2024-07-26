import { updateManyUserBookingsStatus } from "@/services/user-booking.service"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const { userBookings, status } = body
    const { success, error } = await updateManyUserBookingsStatus(
      userBookings,
      status
    )

    if (success) {
      return NextResponse.json(success)
    }

    return NextResponse.json({ error: error })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}
