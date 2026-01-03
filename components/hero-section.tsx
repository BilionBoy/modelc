"use client"

import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/camy6.jpg" alt="Camily" className="w-full h-full object-cover object-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <h1 className="font-serif font-light text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 text-balance">
          CAMILY
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest text-muted-foreground mb-8">MODEL · 22 YEARS</p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll to portfolio"
      >
        <ChevronDown className="h-8 w-8 text-foreground/70" />
      </button>
    </section>
  )
}
