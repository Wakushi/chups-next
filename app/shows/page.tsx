import { fetchShows } from "@/lib/data"
import { playfairDisplay } from "@/styles/fonts"
import Image from "next/image"

export default async function ShowsPage() {
  const shows = await fetchShows()

  return (
    <div className="py-20 px-4">
      <h1 className={`${playfairDisplay.className} text-3xl mb-6`}>
        Spectacles
      </h1>
      <div className="flex flex-col justity-center items-center gap-4">
        {shows.map((show) => (
          <div key={show.id} className="show-frame w-[50%]">
            <Image
              src={show.image}
              alt={show.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
