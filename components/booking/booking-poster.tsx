import Image from "next/image"

export default function BookingPoster({
  title,
  image,
  posterWidth,
  posterHeight,
}: {
  title: string
  image: string
  posterWidth?: number
  posterHeight?: number
}) {
  return (
    <Image
      src={image}
      alt={title}
      width={posterWidth ?? 100}
      height={posterHeight ?? 100}
      className="rounded"
    />
  )
}
