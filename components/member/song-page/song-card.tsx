import { Song } from "@/lib/types/Song"
import { Card, CardContent } from "@/components/ui/card"
import { SongSingers } from "./singers"
import { AudioPlayer } from "./audio-player"
import { DownloadButtons } from "./download-buttons"

interface SongCardProps {
  song: Song
  isPlaying: boolean
  onPlayPause: () => void
}

export function SongCard({ song, isPlaying, onPlayPause }: SongCardProps) {
  return (
    <Card className="bg-slate-800/50 w-full border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">
              {song.id}. {song.title}
            </h3>
            <p className="text-sm text-slate-400">{song.artist}</p>
            <SongSingers singers={song.singers} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
      </CardContent>
    </Card>
  )
}
