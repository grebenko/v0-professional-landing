"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-center">
          <div className="flex gap-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="font-sans text-sm hover:text-accent transition-colors"
            >
              {t.nav.about}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("expertise")}
              className="font-sans text-sm hover:text-accent transition-colors"
            >
              {t.nav.expertise}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="font-sans text-sm hover:text-accent transition-colors"
            >
              {t.nav.contact}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
