"use client"
import { playfairDisplay } from "@/styles/fonts"
import { MdAlternateEmail, MdKey } from "react-icons/md"
import { Button } from "../ui/button"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { FormEvent, useContext, useState } from "react"
import { UserContext } from "@/providers/UserContext"
import LoaderSmall from "../ui/loader-small/loader-small"

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false)
  const { login } = useContext(UserContext)

  async function signIn(e: FormEvent) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const { email, password } = Object.fromEntries(formData.entries())
    await login(email.toString(), password.toString())

    setLoading(false)
  }

  return (
    <>
      <form onSubmit={signIn} className="space-y-3 h-full">
        <div className="flex-1 rounded-lg px-6 pb-4 pt-8 h-full">
          <h1 className={`${playfairDisplay.className} mb-3 text-2xl`}>
            Connexion
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 text-gray-900 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  required
                />
                <MdAlternateEmail className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 text-gray-900 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="********"
                  required
                  minLength={6}
                />
                <MdKey className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          {loading ? (
            <div className="m-4">
              <LoaderSmall />
            </div>
          ) : (
            <Button type="submit" variant="secondary" className="mt-4 w-full">
              Log in
              <FaArrowAltCircleRight className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
          )}
        </div>
      </form>
    </>
  )
}
