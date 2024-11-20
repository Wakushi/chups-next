import { Song } from "@/lib/types/Song"
import { Card, CardContent } from "@/components/ui/card"
import { SongSingers } from "./singers"
import { AudioPlayer } from "./audio-player"
import { DownloadButtons } from "./download-buttons"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

interface SongCardProps {
  song: Song
  isPlaying: boolean
  onPlayPause: () => void
}

export function SongCard({ song, isPlaying, onPlayPause }: SongCardProps) {
  const [isAccordionOpened, setIsAccordionOpened] = useState<boolean>(false)

  return (
    <Card className="bg-slate-800/50 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)] border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4 items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">
              {song.id}. {song.title}
            </h3>
            <p className="text-sm text-slate-400">{song.artist}</p>
            <SongSingers singers={song.singers} />
          </div>

          <div className="flex flex-col gap-4 w-full">
            {!!song.instrumental_url && (
              <AudioPlayer
                isPlaying={isPlaying}
                onPlayPause={onPlayPause}
                duration={song.duration}
                audio={song.audio}
              />
            )}
            <DownloadButtons
              lyricsUrl={song.lyrics_url}
              instrumentalUrl={song.instrumental_url}
            />
          </div>
        </div>
        {!!song.lyrics_html?.__html && (
          <Accordion
            type="single"
            collapsible
            onValueChange={(v) => setIsAccordionOpened(!!v)}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm">
                {isAccordionOpened ? "Cacher" : "Voir"} les paroles
              </AccordionTrigger>
              <AccordionContent>
                <div dangerouslySetInnerHTML={song.lyrics_html}></div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  )
}
