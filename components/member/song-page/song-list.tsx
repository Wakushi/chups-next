import { Song } from "@/lib/types/Song"
import { SongCard } from "./song-card"

interface SongsListProps {
  songs: Song[]
  currentlyPlaying: number | null
  isPlaying: boolean
  setCurrentlyPlaying: (id: number | null) => void
  setIsPlaying: (isPlaying: boolean) => void
}

export function SongsList({
  songs,
  currentlyPlaying,
  isPlaying,
  setCurrentlyPlaying,
  setIsPlaying,
}: SongsListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {songs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          isPlaying={currentlyPlaying === song.id && isPlaying}
          onPlayPause={() => {
            setCurrentlyPlaying(currentlyPlaying === song.id ? null : song.id)
            setIsPlaying(!isPlaying)
          }}
        />
      ))}
    </div>
  )
}
