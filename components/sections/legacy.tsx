import { Award, Factory } from 'lucide-react'

export default function Legacy() {
  return (
    <section id="legacy" className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">OUR HERITAGE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            50+ Years of Steel Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Jindal Steel Tubes Limited has built a strong reputation in India&apos;s steel industry through decades of manufacturing excellence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Factory className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Deep Industrial Expertise
                </h3>
                <p className="text-muted-foreground">
                  With deep expertise in pipes, tubes, and structural steel, we've consistently delivered high-performance products trusted across infrastructure, industrial, and construction sectors.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Award className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Proven Track Record
                </h3>
                <p className="text-muted-foreground">
                  From engineering steel to reinforcing the nation — the legacy continues with unwavering commitment to quality and innovation in every product we deliver.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground mt-1">Years in Industry</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">100K+</p>
                  <p className="text-sm text-muted-foreground mt-1">MT Annual Capacity</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center col-span-2">
                  <p className="text-3xl font-bold text-primary">4</p>
                  <p className="text-sm text-muted-foreground mt-1">Manufacturing States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
