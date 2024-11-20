export type Song = {
  id: number
  title: string
  artist: string
  singers: string[]
  duration: number
  part: 1 | 2
  lyrics_url: string
  instrumental_url: string
  isFavorite: boolean
  audio?: HTMLAudioElement
  isPlaying?: boolean
  lyrics_html?: { __html: string | TrustedHTML }
}
