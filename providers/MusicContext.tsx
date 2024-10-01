"use client"

import { createContext, useState, ReactNode, useEffect } from "react"

interface MusicPlayerContextProviderProps {
  children: ReactNode
}

interface MusicPlayerContextProps {
  playing: boolean
  play: () => void
  pause: () => void
}

const MusicPlayerContext = createContext<MusicPlayerContextProps>({
  playing: false,
  play: () => {},
  pause: () => {},
})

export default function MusicPlayerContextProvider(
  props: MusicPlayerContextProviderProps
) {
  const [playing, setPlaying] = useState<boolean>(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const newAudio = new Audio("/audio/home_music.mp3")
    newAudio.load()
    newAudio.loop = true
    newAudio.volume = 0.2
    setAudio(newAudio)

    return () => {
      newAudio.pause()
      newAudio.src = ""
    }
  }, [])

  function play() {
    if (audio) {
      audio.play()
      setPlaying(true)
    }
  }

  function pause() {
    if (audio) {
      audio.pause()
      setPlaying(false)
    }
  }

  const context: MusicPlayerContextProps = {
    playing,
    play,
    pause,
  }

  return (
    <MusicPlayerContext.Provider value={context}>
      {props.children}
    </MusicPlayerContext.Provider>
  )
}

export { MusicPlayerContext }
