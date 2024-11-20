import { Badge } from "@/components/ui/badge"

interface SongSingersProps {
  singers: string[]
}

export function SongSingers({ singers }: SongSingersProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {singers.map((singer) => (
        <Badge
          key={singer}
          variant="secondary"
          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300"
        >
          {singer}
        </Badge>
      ))}
    </div>
  )
}
