import ShowList from "@/components/show/shows-list"
import { fetchShows } from "@/services/shows.service"
import { playfairDisplay } from "@/styles/fonts"

export default async function ShowsPage() {
  const shows = await fetchShows()

  return (
    <div className="py-20 px-4">
      <div className="mb-6 md:mb-12 md:p-[1rem]">
        <h1
          className={`${playfairDisplay.className} text-3xl md:text-[3rem] md:mb-2`}
        >
          Spectacles
        </h1>
        <p
          className={`${playfairDisplay.className} text-xl md:text-2xl bg-gradient-to-t from-[#020917] via-white to-white bg-clip-text font-display tracking-tight text-transparent`}
        >
          Nos anciens spectacles
        </p>
      </div>
      <ShowList shows={shows} />
    </div>
  )
}
