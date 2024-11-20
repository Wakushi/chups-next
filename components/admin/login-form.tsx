"use client"
import { playfairDisplay } from "@/styles/fonts"
import { MdAlternateEmail, MdKey } from "react-icons/md"
import { Button } from "../ui/button"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { FormEvent, useContext, useState } from "react"
import { UserContext } from "@/providers/UserContext"
import LoaderSmall from "../ui/loader-small/loader-small"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

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
    <Card className="w-full max-w-md space-y-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader className="text-center space-y-2">
        <CardTitle
          className={`${playfairDisplay.className} text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}
        >
          Connexion
        </CardTitle>
        <CardDescription className="text-slate-300">
          Accédez à l'espace Chups
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={signIn} className="space-y-6">
          <div className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-slate-300 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdAlternateEmail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-lg
                             bg-slate-900/50 border border-slate-700
                             text-white placeholder:text-slate-500
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                             transition-all duration-200"
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
                className="block text-sm font-medium text-slate-300 mb-2"
                htmlFor="password"
              >
                Mot de passe
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdKey className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2.5 text-sm rounded-lg
                             bg-slate-900/50 border border-slate-700
                             text-white placeholder:text-slate-500
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                             transition-all duration-200"
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
                className="group relative w-full flex justify-center py-6
                           bg-gradient-to-r from-blue-500 to-purple-500
                           hover:from-blue-600 hover:to-purple-600
                           text-white font-medium rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                           transition-all duration-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaArrowAltCircleRight
                    className="h-5 w-5 text-white/70 group-hover:text-white/90
                               transition-all duration-200"
                  />
                </span>
                Se connecter
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
