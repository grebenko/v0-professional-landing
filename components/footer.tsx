"use client"

import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { language } = useLanguage()

  const copyrightText = language === "ru" ? "© 2025 Александр Гребенко" : "© 2025 Aleksandr Grebenko"

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-sans text-muted-foreground">{copyrightText}</p>
      </div>
    </footer>
  )
}
