"use client"

import { Button } from "@/components/ui/button"
import { Download, Linkedin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] pt-10 pb-16 bg-background">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">{t.hero.name}</h1>
          <p className="font-sans text-lg md:text-xl font-medium text-accent mb-8 tracking-wide">{t.hero.tagline}</p>
        </div>

        <div className="fade-in-delay">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-foreground leading-tight">
            {t.hero.title}
          </h2>
          <p className="font-sans text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">{t.hero.subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-delay-2">
          <Button
            size="lg"
            className="font-sans font-semibold px-8 py-3 text-base hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              {t.hero.downloadCV}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-sans font-semibold px-8 py-3 text-base hover:scale-105 transition-all duration-200 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://linkedin.com/in/grebenko" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              {t.hero.linkedin}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
