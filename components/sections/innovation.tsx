import { Zap, Beaker, CheckCircle2 } from 'lucide-react'

export default function Innovation() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-accent/10 py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          {/* <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">GAME-CHANGING TECH</span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            India&apos;s First Innovation
          </h2>
          <p className="text-lg text-muted-foreground">
            Site TMT Testing Units
          </p>
        </div>

        {/* Full Width Image on Top */}
        <div className="w-full mb-16 relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
          <img
            src="/jstl4.jpeg"
            alt="JSTL Innovation Testing Unit"
            className="w-full h-auto max-h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content Below */}
        {/* Content Below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - On-Site Testing */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                1. Site TMT Testing Unit
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are introducing India&apos;s First Site TMT Testing Units — bringing lab-level verification directly to your construction site.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <Beaker className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">No Assumptions</h4>
                  <p className="text-sm text-muted-foreground">Only tested steel at your site</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">No Middle Layers</h4>
                  <p className="text-sm text-muted-foreground">Direct verification of quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience Centres */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                2. Experience Centres
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our dedicated brand experience centres ensure that before you buy, you see the product, understand the quality, and verify the claims.
              </p>
            </div>

            <div className="bg-accent/5 border border-accent rounded-xl p-6 hover:bg-accent/10 transition-colors">
              <h4 className="font-bold text-foreground mb-4 text-xl">What Makes This Different?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Single Brand Environment (No confusion)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Physical Product Interaction (See, feel, compare)
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Integrated Testing Support
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Expert Consultation
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Transparent Buying Journey
                </li>
              </ul>
            </div>

            <div className="bg-black text-white rounded-xl p-6 border border-accent/30 shadow-xl">
              <p className="text-accent font-bold text-lg">This is not a dealer shop.</p>
              <p className="text-accent font-bold text-lg">This is a controlled brand environment built for trust.</p>
            </div>
          </div>
        </div>

        {/* Final Branding Line */}
        <div className="text-center bg-gradient-to-r from-accent to-background border-2 border-accent/30 rounded-2xl p-10 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
            FROM SHOWROOM → TO PROOF ROOM
          </h3>
          <p className="text-lg font-medium text-muted-foreground italic">
            Building a complete transparent system.
          </p>
        </div>
      </div>
    </section>
  )
}
