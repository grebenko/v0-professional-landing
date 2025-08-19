"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export function ExpertiseSection() {
  const { t } = useLanguage()

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t.expertise.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 fade-in-delay">
          {t.expertise.items.map((area, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-border bg-card hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="font-serif text-xl text-accent">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-base text-card-foreground leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
