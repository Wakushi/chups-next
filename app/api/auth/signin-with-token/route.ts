import { verifyJWT } from "@/lib/crypto"
import { getUserByEmail } from "@/services/user.service"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const cookie = req.cookies.get(process.env.TOKEN_COOKIE as string)
  const token = cookie?.value

  try {
    if (!token) {
      return NextResponse.json(
        {
          message: "Token not found",
        },
        {
          status: 400,
        }
      )
    }

    const payload = verifyJWT(token)
    const user = await getUserByEmail(payload.email)

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 400,
        }
      )
    }

    return NextResponse.json(user)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}
