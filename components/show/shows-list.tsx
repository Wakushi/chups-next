import { Show } from "@/lib/types/Show"
import ShowCard from "./show-card"

export default function ShowList({ shows }: { shows: Show[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
      {shows.map((show: Show) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  )
}
