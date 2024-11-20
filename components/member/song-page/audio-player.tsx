import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { secondsToMinutes } from "@/lib/utils"
import { FaPause, FaPlay } from "react-icons/fa"

interface AudioPlayerProps {
  isPlaying: boolean
  onPlayPause: () => void
  duration: number
  audio: HTMLAudioElement | undefined
}

export function AudioPlayer({
  isPlaying,
  onPlayPause,
  duration,
  audio,
}: AudioPlayerProps) {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    if (!audio) return

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    audio.addEventListener("timeupdate", handleTimeUpdate)
    return () => audio.removeEventListener("timeupdate", handleTimeUpdate)
  }, [audio])

  const handleSliderChange = (value: number[]) => {
    if (!audio) return
    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  return (
    <div className="flex items-center gap-4 p-2 px-4 rounded-lg bg-slate-900/50 min-w-[200px] md:min-w-[300px]">
      <button
        onClick={onPlayPause}
        className="h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
      >
        {isPlaying ? (
          <FaPause className="text-white" />
        ) : (
          <FaPlay className="text-white ml-1" />
        )}
      </button>
      <div className="flex-1 flex flex-col gap-[5px] mt-2">
        <Slider
          value={[currentTime]}
          max={duration}
          step={1}
          className="w-full"
          onValueChange={handleSliderChange}
        />
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>{secondsToMinutes(currentTime)}</span>
          <span>{secondsToMinutes(duration)}</span>
        </div>
      </div>
    </div>
  )
}
