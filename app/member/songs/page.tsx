"use client"
import { useState } from "react"
import { songs } from "@/lib/data/songs"
import { PageHeader } from "@/components/member/song-page/page-header"
import { SearchBar } from "@/components/member/song-page/search-bar"
import { SongsList } from "@/components/member/song-page/song-list"

export default function SongsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.singers.some((singer) =>
        singer.toLowerCase().includes(searchTerm.toLowerCase())
      )
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-20 px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <PageHeader
          title="Chants & Musiques"
          description="Retrouvez tous les chants du spectacle avec leurs bandes sons."
        />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <SongsList
          songs={filteredSongs}
          currentlyPlaying={currentlyPlaying}
          isPlaying={isPlaying}
          setCurrentlyPlaying={setCurrentlyPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  )
}
