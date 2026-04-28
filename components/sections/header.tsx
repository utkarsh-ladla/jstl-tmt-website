'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DealerModal from './dealer-modal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/logo1.jpeg" 
                  alt="JSTL Logo" 
                  className="h-10 sm:h-12 w-auto object-contain rounded" 
                />
              </a>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#legacy" className="text-sm text-foreground hover:text-primary transition">
                Legacy
              </a>
              <a href="#products" className="text-sm text-foreground hover:text-primary transition">
                Products
              </a>
              <a href="#tmt" className="text-sm text-foreground hover:text-primary transition">
                TMT Bars
              </a>
              <a href="#specs" className="text-sm text-foreground hover:text-primary transition">
                Specifications
              </a>
              <a href="#pricing" className="text-sm text-foreground hover:text-primary transition">
                Pricing
              </a>
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold dealer-modal-trigger"
                onClick={() => setIsDealerModalOpen(true)}
              >
                Become a Dealer
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => document.querySelector('#project-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 space-y-2">
              <a
                href="#legacy"
                className="block px-4 py-2 text-sm text-foreground hover:text-primary transition"
              >
                Legacy
              </a>
              <a
                href="#products"
                className="block px-4 py-2 text-sm text-foreground hover:text-primary transition"
              >
                Products
              </a>
              <a
                href="#tmt"
                className="block px-4 py-2 text-sm text-foreground hover:text-primary transition"
              >
                TMT Bars
              </a>
              <a
                href="#specs"
                className="block px-4 py-2 text-sm text-foreground hover:text-primary transition"
              >
                Specifications
              </a>
              <a
                href="#pricing"
                className="block px-4 py-2 text-sm text-foreground hover:text-primary transition"
              >
                Pricing
              </a>
              <div className="flex gap-2 px-4 pt-2">
                <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" onClick={() => setIsDealerModalOpen(true)}>
                  Dealer
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => document.querySelector('#project-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Quote
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
      <DealerModal isOpen={isDealerModalOpen} onClose={() => setIsDealerModalOpen(false)} />
    </>
  )
}
