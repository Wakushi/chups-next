import { Button } from "./ui/button"

function BookButton() {
  return (
    <Button
      className="bg-gradient-to-r from-red-900 to-red-600 uppercase fixed bottom-0 w-full text-white font-bold text-lg shadow-md p-6"
      style={{
        borderRadius: "0",
      }}
    >
      <span className="drop-shadow-2xl">Réserver</span>
    </Button>
  )
}

export { BookButton }
