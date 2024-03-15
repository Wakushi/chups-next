// Components
import Hero from "../components/landing/hero"
import { BookButton } from "@/components/buttons"
// Styles
import AgendaSection from "@/components/landing/agenda-section"
import AboutSection from "@/components/landing/about-section"

export default function Home() {
  return (
    <div>
      <Hero />
      <AgendaSection />
      <AboutSection />
      <BookButton />
    </div>
  )
}
