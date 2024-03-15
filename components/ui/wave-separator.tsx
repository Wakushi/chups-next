import Image from "next/image"

export default function WaveSeparator() {
  return (
    <div className="absolute top-[-1px] w-full h-[200px]">
      <Image
        src="/images/shapes/wave.svg"
        alt="wave"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  )
}
