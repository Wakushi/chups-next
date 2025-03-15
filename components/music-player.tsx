"use client"

import { MusicPlayerContext } from "@/providers/MusicContext"
import { useContext } from "react"
import { TbMusic, TbMusicPause } from "react-icons/tb"

export default function MusicButton() {
  const { playing, play, pause } = useContext(MusicPlayerContext)

  return playing ? (
    <TbMusicPause
      className="text-2xl mr-8 cursor-pointer hover:text-amber-400 drop-shadow-lg"
      onClick={pause}
    />
  ) : (
    <TbMusic
      className="text-2xl mr-8 cursor-pointer hover:text-amber-400 drop-shadow-lg"
      onClick={play}
    />
  )
}
