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
          {/* <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">HERO PRODUCT</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            JSTL TMT Bars
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineered for strength. Designed for long life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Available Grades */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Available Grades</h3>
              <div className="space-y-4">
                {grades.map((grade, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-4 hover:border-accent/30 transition"
                  >
                    <h4 className="text-lg font-semibold text-accent mb-1">
                      {grade.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {grade.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Sizes */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Available Sizes</h3>
              <div className="flex flex-wrap gap-3">
                {[8, 10, 12, 16, 20, 25, 32].map((size) => (
                  <div
                    key={size}
                    className="bg-accent border border-accent/40 rounded-lg px-4 py-2 text-center"
                  >
                    <span className="font-semibold text-black">{size}mm</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Why JSTL TMT */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Why JSTL TMT?</h3>
              <p className="text-accent font-semibold italic">Most brands talk strength. We prove it.</p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Quality Badge */}
            <div className="mt-8 bg-gradient-to-r from-accent/15 to-background border border-accent/40 rounded-lg p-6">
              <p className="text-sm font-semibold text-black mb-2">BIS CERTIFIED</p>
              <p className="text-foreground font-semibold">
                Fully compliant with IS 1786:2008
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Meeting international quality standards for reinforcing steel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
