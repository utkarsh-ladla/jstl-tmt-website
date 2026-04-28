'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DealerModal from './dealer-modal'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { label: 'Legacy', href: '#legacy' },
    { label: 'Products', href: '#products' },
    { label: 'TMT Bars', href: '#tmt' },
    { label: 'Specifications', href: '#specs' },
    { label: 'Pricing', href: '#pricing' },
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }, observerOptions)

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/logo4.png"
                    alt="JSTL Logo"
                    className="h-12 sm:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </a>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group",
                    activeSection === item.href
                      ? "text-accent"
                      : "text-white hover:text-accent"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300",
                    activeSection === item.href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100"
                  )} />
                </a>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-[11px] h-10 px-6 rounded-full transition-all duration-300 dealer-modal-trigger"
                onClick={() => setIsDealerModalOpen(true)}
              >
                Become Brand Store Partner
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-[11px] h-10 px-6 rounded-full transition-all duration-300"
                onClick={() => document.querySelector('#project-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden py-6 space-y-4 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "block px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] transition-colors",
                    activeSection === item.href ? "text-accent" : "text-white"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 px-4 pt-4">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-[11px] h-11 rounded-full"
                  onClick={() => setIsDealerModalOpen(true)}
                >
                  Become Brand Store Partner
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-[11px] h-11 rounded-full"
                  onClick={() => {
                    document.querySelector('#project-inquiry')?.scrollIntoView({ behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                >
                  Get Quote
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
