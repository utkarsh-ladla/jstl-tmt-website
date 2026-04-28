'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const isHomePage = pathname === '/'

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

    const handleScrollEvent = () => {
      if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScrollEvent)

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

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage) return // Allow default link behavior to navigate to home page
    e.preventDefault()
    
    // Close mobile menu first so it doesn't interfere with position calculations
    setIsOpen(false)

    // Small timeout to allow the menu to close and layout to stabilize
    setTimeout(() => {
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
    }, 10)
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
                    className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </a>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={isHomePage ? item.href : `/${item.href}`}
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
                </Link>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <Link href="/become-partner">
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-[11px] h-10 px-6 rounded-full transition-all duration-300"
                >
                  Become Brand Store Partner
                </Button>
              </Link>
              <Link href="/#project-inquiry">
                <Button
                  size="sm"
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold uppercase tracking-wider text-[11px] h-10 px-6 rounded-full transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95"
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      document.querySelector('#project-inquiry')?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
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
            <nav className="lg:hidden py-8 space-y-6 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={isHomePage ? item.href : `/${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "block px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] transition-colors",
                    activeSection === item.href ? "text-accent" : "text-white/90 hover:text-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 px-4 pt-4">
                <Link href="/become-partner" className="w-full">
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-xs h-12 rounded-full shadow-lg shadow-accent/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Become Brand Store Partner
                  </Button>
                </Link>
                <Link href="/#project-inquiry" className="w-full">
                  <Button
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold uppercase tracking-wider text-xs h-12 rounded-full backdrop-blur-md transition-all duration-300"
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault()
                        document.querySelector('#project-inquiry')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      setIsOpen(false)
                    }}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
