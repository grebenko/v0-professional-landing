"use client"

import { useLanguage } from "@/hooks/use-language"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6 text-center fade-in">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-primary">{t.about.title}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground">{t.about.content}</p>
        </div>
      </div>
    </section>
  )
}
