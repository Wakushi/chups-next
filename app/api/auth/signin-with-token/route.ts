import { verifyJWT } from "@/lib/crypto"
import { getUserByEmail } from "@/services/user.service"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()
    const payload = verifyJWT(body.token)
    const user = await getUserByEmail(payload.email)

    if (!user) {
      return NextResponse.json(
        {
          message: "Email ou mot de passe incorrect",
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
