import {
  deleteUserBooking,
  updateUserBooking,
} from "@/services/bookings.service"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const { success, data, error } = await updateUserBooking(body)

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
