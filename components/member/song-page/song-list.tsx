import { Song } from "@/lib/types/Song"
import { SongCard } from "./song-card"

interface SongsListProps {
  songs: Song[]
  playingSong: Song | null
  handlePlaySong: (song: Song) => void
}

export function SongsList({
  songs,
  playingSong,
  handlePlaySong,
}: SongsListProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {songs.map((song) => (
        <SongCard
          key={song.id + song.title}
          song={song}
          isPlaying={
            playingSong?.instrumental_url === song.instrumental_url &&
            !!song.isPlaying
          }
          onPlayPause={() => handlePlaySong(song)}
        />
      ))}
    </div>
  )
}
