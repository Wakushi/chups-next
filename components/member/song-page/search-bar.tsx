import { FaSearch } from "react-icons/fa"
import { X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const handleClear = () => {
    onChange("")
  }

  return (
    <div className="relative max-w-[600px]">
      <FaSearch className="absolute text-slate-400 left-3 top-1/2 -translate-y-1/2" />
      <Input
        className="pl-10 pr-10 bg-slate-900/50 border-slate-700 focus:border-slate-500 transition-colors"
        placeholder="Titre, artiste, interprète..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-7 p-0 hover:bg-slate-800"
          onClick={handleClear}
        >
          <X className="h-4 w-4 text-slate-400" />
        </Button>
      )}
    </div>
  )
}
