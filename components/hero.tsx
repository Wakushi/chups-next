import Image from "next/image"

export default function Hero() {
  return (
    <div>
      <Image
        src="/images/chups_story_survillier.png"
        width={1000}
        height={760}
        className=""
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  )
}
