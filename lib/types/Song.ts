export type Song = {
  id: number
  title: string
  artist: string
  singers: string[]
  duration: string
  part: 1 | 2
  lyrics_url: string
  instrumental_url: string
  isFavorite: boolean
}