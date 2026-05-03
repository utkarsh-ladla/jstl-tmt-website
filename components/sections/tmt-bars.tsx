import Image from 'next/image'
import { Check } from 'lucide-react'

export default function TMTBars() {
  const grades = [
    { name: 'Fe 550D', description: 'Standard high-strength grade' },
    { name: 'UHD 550', description: 'Ultra-high-duty variant' },
  ]

  const benefits = [
    'High Strength Performance',
    'Superior Ductility (Earthquake Resistant)',
    'Better Bonding with Concrete',
    'Corrosion Resistance',
    'Batch Consistency',
  ]

  return (
    <section id="tmt" className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            JSTL TMT Bars
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineered for strength. Designed for long life.
          </p>
        </div>

        {/* Main Grid: Image (left) | Content (right) — vertically stretched to match */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-stretch">

          {/* Left — Product Portfolio Image: fills full height of the right column */}
          <div className="flex items-stretch">
            <div className="relative w-full min-h-[360px] lg:min-h-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10 bg-black">
              <Image
                src="/product_portfolio.jpeg"
                alt="JSTL TMT Bars Product Portfolio"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right — Grades + Benefits */}
          <div className="flex flex-col justify-between gap-7">

            {/* Available Grades */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Available Grades</h3>
              <div className="space-y-3">
                {grades.map((grade, index) => (
                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-lg p-4 hover:border-accent/50 transition-colors duration-200"
                  >
                    <h4 className="text-base font-semibold text-accent mb-1">
                      {grade.name}
                    </h4>
                    <p className="text-sm text-white/70">
                      {grade.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Sizes */}
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {[8, 10, 12, 16, 20, 25, 32].map((size) => (
                  <div
                    key={size}
                    className="bg-accent border border-accent/40 rounded-lg px-3 py-1.5 text-center"
                  >
                    <span className="font-semibold text-black text-sm">{size}mm</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why JSTL TMT */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Why JSTL TMT?</h3>
              <p className="text-accent font-semibold italic text-sm mb-3">Most brands talk strength. We prove it.</p>
              <div className="space-y-2.5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Badge */}
            <div className="bg-accent rounded-lg p-5">
              <p className="text-xs font-bold text-black uppercase tracking-widest mb-1">BIS Certified</p>
              <p className="text-foreground font-semibold text-sm">
                Fully compliant with IS 1786:2008
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Meeting international quality standards for reinforcing steel
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
