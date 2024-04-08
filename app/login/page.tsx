import LoginForm from "@/components/admin/login-form"

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-2 py-20 px-4 min-h-[100vh] max-w-[600px] m-auto">
      <LoginForm />
    </div>
  )
}
