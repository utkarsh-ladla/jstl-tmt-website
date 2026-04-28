import { Zap, Beaker, CheckCircle2 } from 'lucide-react'

export default function Innovation() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-accent/10 py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">GAME-CHANGING TECH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            India&apos;s First Innovation
          </h2>
          <p className="text-lg text-muted-foreground">
            On-Site TMT Testing Units
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features List */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Beaker className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Real-Time Verification
                </h4>
                <p className="text-sm text-muted-foreground">
                  Test quality directly at your construction site
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Zero Assumptions
                </h4>
                <p className="text-sm text-muted-foreground">
                  No blind trust — only verified, tested steel
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <Zap className="w-6 h-6 text-black" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Instant Results
                </h4>
                <p className="text-sm text-muted-foreground">
                  Get mechanical and chemical test results on-site
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Transparency */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Transparency at Every Step
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are introducing India&apos;s first on-site TMT testing units — bringing quality verification directly to your construction site.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="bg-accent/5 border border-accent rounded-xl p-5 hover:bg-accent/10 transition-colors">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  No Assumptions. No Blind Trust.
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every batch of JSTL TMT Bars can be tested on-site for full compliance with IS 1786:2008 standards, ensuring you get exactly what you pay for.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent rounded-xl p-5 hover:bg-accent/10 transition-colors">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  Only Tested Steel.
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our commitment to transparency means you have complete visibility into every aspect of material quality before a single bar is laid.
                </p>
              </div>
            </div>

            {/* Confidence Statement */}
            <div className="bg-gradient-to-r from-accent to-background border-2 border-accent/30 rounded-xl p-6 shadow-inner">
              <p className="text-foreground font-bold text-xl mb-1">
                Testing Builds Proof. JSTL Builds Both.
              </p>
              <p className="text-sm font-medium text-muted-foreground italic">
                Legacy Builds Trust. Innovation Secures It.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
