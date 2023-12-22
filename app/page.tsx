import Aboute from "@/components/Aboute"
import ContactMe from "@/components/ContactMe"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import NewSkill from "@/components/NewSkill"
import Projects from "@/components/Projects"
import Skils from "@/components/Skils"
import WorkExperience from "@/components/WorkExperience"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden   scrollbar scrollbar-thumb-red-500 scrollbar-track-gray-100">
      <Header />


      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="About" className="snap-center">
        <Aboute />
      </section>

      <section id="Experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="Skils" className="snap-start">
        <NewSkill />
      </section>

      <section id="Project" className="snap-start">
        <Projects TiteProject="Netflix Clone" image="https://seeklogo.com/images/N/netflix-logo-B24AFC06E5-seeklogo.com.png" />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  )
}
