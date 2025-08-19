import type React from "react"
import { Playfair_Display, Inter } from "next/font/google"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
})

export const metadata = {
  title: "Aleksandr Grebenko — Business Systems Analyst",
  description:
    "Business Systems Analyst | Fintech Solution Architect - Bridging Business Vision with Digital Precision",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
