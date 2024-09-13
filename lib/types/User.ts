export type User = {
  id?: string
  email: string
  name: string
  password: string
  role: "user" | "admin"
}
