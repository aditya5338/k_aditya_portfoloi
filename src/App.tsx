import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import FeaturedVideoSection from './sections/FeaturedVideoSection'
import PhilosophySection from './sections/PhilosophySection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import EducationSection from './sections/EducationSection'
import FooterSection from './sections/FooterSection'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <FooterSection />
    </main>
  )
}
