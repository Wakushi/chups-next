import { Slider } from "@/components/ui/slider"
import { FaPause, FaPlay } from "react-icons/fa"

interface AudioPlayerProps {
  isPlaying: boolean
  onPlayPause: () => void
  duration: string
}

export function AudioPlayer({
  isPlaying,
  onPlayPause,
  duration,
}: AudioPlayerProps) {
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
      <div className="flex-1">
        <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
        <p className="text-xs text-slate-400 mt-1">{duration}</p>
      </div>
    </div>
  )
}
