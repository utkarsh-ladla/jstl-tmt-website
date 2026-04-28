'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleRequestQuote = () => {
    scrollToSection('#project-inquiry')
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-accent/5 to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-1">
              <h2 className="text-sm md:text-base font-bold text-accent tracking-wider uppercase">
                INDIA&apos;S FIRST TESTED TMT BUYING SYSTEM
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-foreground leading-tight">
                JSTL TMT BARS
              </h1>
            </div>
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-muted-foreground flex items-center gap-2">
                A Product of <span className="text-foreground font-bold">Jindal Steel Tubes Limited</span>
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Powered by <span className="text-accent font-semibold">Khyati Infra Mart</span>
              </p>
            </div>
            <div className="space-y-1 mt-2">
              <p className="text-lg font-bold text-foreground">
                👉 Experience Centre + Live Testing = Verified Steel
              </p>
              <p className="text-md text-muted-foreground">
                Not a Store. A New Way to Buy Steel.
              </p>
            </div>

            {/* Hindi Tagline */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 my-4">
              <p className="text-lg italic text-foreground font-semibold">
                "जो सच है वही टिकेगा… बाकी टेस्ट में दिखेगा।"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                What is true will last... the rest will be revealed in testing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
                onClick={() => scrollToSection('#pricing')}
              >
                Check Today&apos;s Rate
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link href="/become-partner" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
                >
                  Become Brand Store Partner
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto"
                onClick={handleRequestQuote}
              >
                Request Project Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:flex items-center justify-center w-full">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
              <img
                src="/hero.jpeg"
                alt="JSTL TMT Bars Construction"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
