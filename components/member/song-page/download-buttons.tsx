import { Button } from "@/components/ui/button"
import { FaDownload } from "react-icons/fa"
import { IoDocumentTextOutline } from "react-icons/io5"

interface DownloadButtonsProps {
  lyricsUrl: string
  instrumentalUrl: string
}

export function DownloadButtons({
  lyricsUrl,
  instrumentalUrl,
}: DownloadButtonsProps) {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => window.open(lyricsUrl, "_blank")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg"
      >
        <IoDocumentTextOutline />
        <span className="text-sm">Paroles</span>
      </Button>
      <Button
        disabled={!instrumentalUrl}
        onClick={() => window.open(instrumentalUrl, "_blank")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg"
      >
        <FaDownload />
        <span className="text-sm">MP3</span>
      </Button>
    </div>
  )
}
