'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { desktop: '/banner/1.jpeg', mobile: '/banner/1.jpeg' },
  { desktop: '/banner/2.jpeg', mobile: '/banner/2.jpeg' },
  { desktop: '/banner/3.jpeg', mobile: '/banner/3.jpeg' },
  { desktop: '/banner/4.jpeg', mobile: '/banner/4.jpeg' },
  { desktop: '/banner/5.jpeg', mobile: '/banner/5.jpeg' },
  { desktop: '/banner/6.jpeg', mobile: '/banner/6.jpeg' },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full overflow-hidden group bg-black">
      {/* 
        This invisible image acts as a spacer to ensure the container 
        always matches the aspect ratio of the banners.
        Using object-contain and w-full ensures the full image is visible.
      */}
      <div className="relative w-full">
        <picture className="invisible pointer-events-none">
          <source media="(min-width: 768px)" srcSet={slides[0].desktop} />
          <img
            src={slides[0].mobile}
            alt=""
            className="w-full h-auto"
          />
        </picture>

        {/* The actual slider images */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentIndex 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
              style={{ zIndex: index === currentIndex ? 10 : 1 }}
            >
              <picture className="w-full h-full flex items-center justify-center">
                <source media="(min-width: 768px)" srcSet={slide.desktop} />
                <img
                  src={slide.mobile}
                  alt={`JSTL TMT Banner ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </picture>
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 backdrop-blur-md text-white p-2 md:p-4 rounded-full transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 backdrop-blur-md text-white p-2 md:p-4 rounded-full transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? 'bg-primary w-8 md:w-12 shadow-[0_0_10px_rgba(234,28,36,0.5)]'
                : 'bg-white/40 hover:bg-white/70 w-2 md:w-2'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
