'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/banner/banner1.jpeg',
  '/banner/banner2.jpeg',
  '/banner/banner3.jpeg',
  '/banner/banner4.jpeg',
  '/banner/banner5.jpeg'
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden group bg-black">
      {/* Slider Images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentIndex ? 10 : 1 }}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 z-20 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-6 md:w-8'
                : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
