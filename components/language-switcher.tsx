"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex justify-end pt-6 pr-8 max-w-7xl mx-auto fade-in">
      <div className="flex gap-2">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="font-sans text-sm transition-all duration-200 hover:scale-105"
        >
          EN
        </Button>
        <Button
          variant={language === "ru" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("ru")}
          className="font-sans text-sm transition-all duration-200 hover:scale-105"
        >
          RU
        </Button>
      </div>
    </div>
  )
}
