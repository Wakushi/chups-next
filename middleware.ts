import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { RateLimiterMemory } from "rate-limiter-flexible"

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 1,
})

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const url = request.nextUrl.clone()
  const authCookie = request.cookies.get(process.env.TOKEN_COOKIE as string)
  const token = authCookie?.value

  try {
    if (request.ip) {
      await rateLimiter.consume(request.ip)
    }

    if (pathname.includes("/admin")) {
      if (!token) {
        url.pathname = "/"
        return NextResponse.redirect(url)
      }
    }

    return NextResponse.next()
  } catch (rateLimiterRes) {
    return new NextResponse("Too many requests", { status: 429 })
  }
}

export const config = {
  matcher: ["/api/booking/user-booking", "/api/contact", "/admin/:path*"],
}
