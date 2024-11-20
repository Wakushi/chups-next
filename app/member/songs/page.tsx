"use client"
import { useEffect, useState } from "react"
import { RAW_SONGS } from "@/lib/data/songs"
import { PageHeader } from "@/components/member/song-page/page-header"
import { SearchBar } from "@/components/member/song-page/search-bar"
import { SongsList } from "@/components/member/song-page/song-list"
import { Song } from "@/lib/types/Song"
import LoaderSmall from "@/components/ui/loader-small/loader-small"
import { getAudioDuration } from "@/lib/utils"

export default function SongsPage() {
  const [songs, setSongs] = useState<Song[]>([])

  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const [playingSong, setPlayingSong] = useState<Song | null>(null)

  useEffect(() => {
    async function loadSongsAudio() {
      setLoading(true)

      const loadedSongs: Song[] = []

      for (let song of RAW_SONGS) {
        if (song.instrumental_url) {
          song.audio = new Audio(song.instrumental_url)
          song.duration = await getAudioDuration(song.audio)
        }

        loadedSongs.push(song)
      }

      setSongs(loadedSongs)
      setLoading(false)
    }

    loadSongsAudio()
  }, [])

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.singers.some((singer) =>
        singer.toLowerCase().includes(searchTerm.toLowerCase())
      )
  )

  function handlePlaySong(song: Song): void {
    if (playingSong && playingSong.audio) {
      song.isPlaying = false
      playingSong.audio.pause()
    }

    if (song.instrumental_url === playingSong?.instrumental_url) {
      setPlayingSong(null)
      return
    }

    if (!song.audio) return

    song.isPlaying = true
    song.audio.play()

    setPlayingSong(song)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <PageHeader
          title="Chants & Musiques"
          description="Retrouvez tous les chants du spectacle avec leurs bandes sons."
        />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        {loading ? (
          <LoaderSmall />
        ) : (
          <SongsList
            songs={filteredSongs}
            playingSong={playingSong}
            handlePlaySong={handlePlaySong}
          />
        )}
      </div>
    </div>
  )
}
