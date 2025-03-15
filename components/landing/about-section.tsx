import FadeDivider from "../fade-divider"
import TexturedPostcard from "../postcard"

export default function AboutSection() {
  return (
    <div className="relative w-auto bg-about-image bg-cover bg-center min-h-[100vh] ">
      <FadeDivider position="top" />
      <div className="bg-[#111111b0] min-h-[100vh] w-auto relative  flex items-center justify-center flex-col gap-2 px-4">
        <TexturedPostcard />
      </div>
      <FadeDivider />
    </div>
  )
}
