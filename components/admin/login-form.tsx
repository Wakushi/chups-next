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
    <div className="min-h-[400px] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-8">
        <div className="text-center">
          <h1
            className={`${playfairDisplay.className} text-3xl font-bold tracking-tight text-gray-900`}
          >
            Connexion
          </h1>
          <p className="mt-2 text-sm text-gray-600">Accédez à l'espace Chups</p>
        </div>

        <form onSubmit={signIn} className="mt-8 space-y-6">
          <div className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdAlternateEmail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full text-black pl-10 pr-3 py-2.5 sm:text-sm border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           transition-all duration-200 ease-in-out
                           placeholder:text-gray-400"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@doe.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdKey className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-full text-black pl-10 pr-3 py-2.5 sm:text-sm border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                           transition-all duration-200 ease-in-out
                           placeholder:text-gray-400"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="********"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>

          <div>
            {loading ? (
              <div className="flex justify-center py-2">
                <LoaderSmall />
              </div>
            ) : (
              <Button
                type="submit"
                variant="secondary"
                className="group relative w-full flex justify-center py-3 px-4 
                         border border-transparent text-sm font-medium rounded-lg
                         text-white bg-indigo-600 hover:bg-indigo-700
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                         transition-all duration-200 ease-in-out"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaArrowAltCircleRight
                    className="h-5 w-5 text-indigo-200 group-hover:text-indigo-100 
                                                  transition-all duration-200 ease-in-out"
                  />
                </span>
                Se connecter
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
