"use client"
import { playfairDisplay } from "@/styles/fonts"
import { useFormState, useFormStatus } from "react-dom"
import { MdAlternateEmail, MdKey } from "react-icons/md"
import { FaCircleExclamation } from "react-icons/fa6"
import { Button } from "../ui/button"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { authenticate } from "@/lib/actions"

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <>
      <form action={dispatch} className="space-y-3 h-full">
        <div className="flex-1 rounded-lg px-6 pb-4 pt-8 h-full">
          <h1 className={`${playfairDisplay.className} mb-3 text-2xl`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
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
                  placeholder="Enter your email address"
                  required
                />
                <MdAlternateEmail className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 text-gray-900 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <MdKey className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <FaCircleExclamation className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">
                  Email ou mot de passe incorrect.
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <Button variant="secondary" className="mt-4 w-full" aria-disabled={pending}>
      Log in <FaArrowAltCircleRight className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  )
}
