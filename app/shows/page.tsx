import ShowList from "@/components/show/shows-list"
import { fetchShows } from "@/lib/data"
import { playfairDisplay } from "@/styles/fonts"

export default async function ShowsPage() {
  const shows = await fetchShows()

  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>
        Spectacles
      </h1>
      <ShowList shows={shows} />
    </div>
  )
}
