export type Show = {
  id: string
  description: string
  image: string
  title: string
  year: number
}

export type User = {
  id: string
  email: string
  name: string
  password: string
  role: "user" | "admin"
}
