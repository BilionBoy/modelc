"use client"

import { useState } from "react"
import { X } from "lucide-react"

const portfolioImages = [
  {
    src: "/images/camy7.jpg",
    alt: "Fashion portrait",
    category: "Editorial",
  },
  {
    src: "/images/camy8.jpg",
    alt: "Studio shoot",
    category: "Studio",
  },
  {
    src: "/images/camy4.jpg",
    alt: "Lifestyle photography",
    category: "Lifestyle",
  },
  {
    src: "/images/camy2.jpg",
    alt: "Portrait photography",
    category: "Portrait",
  },
  {
    src: "/images/camy6.jpg",
    alt: "Outdoor fashion",
    category: "Editorial",
  },
  {
    src: "/images/camy3.jpg",
    alt: "Swimwear photography",
    category: "Swimwear",
  },
]

export function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioImages)[0] | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Editorial", "Studio", "Lifestyle", "Portrait", "Swimwear"]

  const filteredImages = filter === "All" ? portfolioImages : portfolioImages.filter((img) => img.category === filter)

  return (
    <section id="portfolio" className="py-24 px-6 container mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="font-serif font-light text-5xl md:text-6xl tracking-wider mb-4">Portfolio</h2>
        <p className="text-muted-foreground font-light tracking-wide">Selected Works</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 text-sm font-light tracking-wider transition-all ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[3/4] overflow-hidden cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light tracking-wider">
                {image.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-muted-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.src || "/placeholder.svg"}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
