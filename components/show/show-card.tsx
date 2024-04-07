import { Show } from "@/lib/definitions"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { playfairDisplay } from "@/styles/fonts"

export default function ShowCard({ show }: { show: Show }) {
  const { id, title, image, description, year } = show

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div key={id} className="show-frame">
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="min-h-[100dvh] max-h-[100dvh] rounded overflow-auto p-4">
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex flex-col items-center gap-2">
            <h2
              className={`${playfairDisplay.className} text-2xl text-center uppercase`}
            >
              {title}
            </h2>
            <h3 className={`${playfairDisplay.className} text-xl text-center`}>
              {year}
            </h3>
          </div>
          <Image
            src={image}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "80%", height: "auto" }}
            className="rounded"
          />
          <p className="text-center">{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
