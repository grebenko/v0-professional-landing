import { Navigation } from "@/components/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <LanguageSwitcher />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
