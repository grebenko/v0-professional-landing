"use client"

import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6 text-center fade-in">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">{t.contact.title}</h2>
        <p className="font-sans text-lg text-muted-foreground mb-12">{t.contact.subtitle}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button
            size="lg"
            className="font-sans font-semibold px-8 py-3 text-base hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="mailto:grebenko1999@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              {t.contact.email}
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
              {t.contact.linkedin}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
