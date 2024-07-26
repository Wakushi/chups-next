import { bookShow } from "@/services/bookings.service"
import {
  deleteUserBooking,
  updateUserBookingStatus,
} from "@/services/user-booking.service"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const response = await bookShow(body)
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const { userBooking, status } = body
    const { success, data, error } = await updateUserBookingStatus(
      userBooking,
      status
    )

    if (success && data) {
      return NextResponse.json(data)
    }

    return NextResponse.json({ error: error })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (id) {
      const response = await deleteUserBooking(id)
      return NextResponse.json(response)
    }

    return NextResponse.json({ message: "Missing id" })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}
