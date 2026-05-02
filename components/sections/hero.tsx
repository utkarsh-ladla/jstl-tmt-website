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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground leading-tight tracking-tight">
                JSTL TMT BARS
              </h1>
              <p className="text-xl md:text-2xl font-bold text-accent">
                A Product of Jindal Steel Tubes Ltd.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                Strength You Can Trust. Quality You Can See.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Engineered for durability and manufactured under strict quality systems with <span className="text-foreground font-bold">ISI Mark certification</span>, JSTL TMT Bars are built to deliver consistent strength for every structure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="space-y-2">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full" />
                  First Time in India – On-Site TMT Testing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Quality you don&apos;t just believe in—you verify it at your construction site in real time.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-accent rounded-full" />
                  Brand Store – A New Way to Buy Steel
                </h3>
                <p className="text-sm text-muted-foreground">
                  Moving beyond traditional dealer dependency, JSTL introduces exclusive brand stores for transparent pricing, assured quality, and direct trust.
                </p>
              </div>
            </div>

            <div className="py-4 border-y border-border/50">
              <p className="text-lg font-bold text-foreground text-center md:text-left">
                No middle confusion. No compromise. Only certified strength.
              </p>
              <p className="text-2xl font-black text-accent mt-2 text-center md:text-left tracking-tighter">
                BUILD STRONG. BUILD SMART. BUILD JSTL.
              </p>
            </div>

            {/* Hindi Tagline */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
              <p className="text-lg italic text-foreground font-semibold">
                &quot;जो सच है वही टिकेगा… बाकी Test में दिखेगा।&quot;
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
          <div className="relative flex items-center justify-center w-full">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
              <img
                src="/showroom.jpeg"
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
