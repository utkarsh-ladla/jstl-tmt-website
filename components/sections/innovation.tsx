import { Beaker, CheckCircle2 } from 'lucide-react'

export default function Innovation() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-accent/5 py-20 md:py-32 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            India&apos;s First Innovation
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Setting new standards in steel transparency and quality assurance.
          </p>
        </div>

        {/* Rows Content */}
        <div className="space-y-32">
          
          {/* Row 1: On-Site TMT Testing Unit */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                1. On-Site TMT Testing Unit
              </h3>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-4xl">
                We are introducing India&apos;s First On-Site TMT Testing Units — bringing lab-level verification directly to your construction site. No more assumptions, only tested steel for your home.
              </p>
            </div>

            <div className="relative group w-full">
              <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
                <img
                  src="/jstl4.jpeg"
                  alt="JSTL On-Site TMT Testing Unit"
                  className="w-full h-auto max-h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
              <div className="flex gap-4 p-5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-accent flex">
                  <Beaker className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">No Assumptions</h4>
                  <p className="text-sm text-muted-foreground">Direct site verification</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-accent flex">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 text-lg">No Middle Layers</h4>
                  <p className="text-sm text-muted-foreground">Transparent quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Experience Centres */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity -z-10" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
                <img
                  src="/showroom.jpeg"
                  alt="JSTL Experience Centre"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  2. Experience Centres
                </h3>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  Our dedicated brand experience centres ensure that before you buy, you see the product, understand the quality, and verify the claims in a controlled environment.
                </p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 hover:bg-accent/10 transition-colors">
                <h4 className="font-bold text-foreground mb-6 text-2xl">What Makes This Different?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Single Brand Environment",
                    "Physical Product Interaction",
                    "Integrated Testing Support",
                    "Expert Consultation",
                    "Transparent Buying Journey",
                    "No Dealer Confusion"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm md:text-base font-semibold text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-black text-white rounded-2xl border border-accent/30 shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-accent font-black text-xl mb-1 italic uppercase">This is not a dealer shop.</p>
                  <p className="text-white/80 font-medium">This is a controlled brand environment built for trust.</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>

        </div>

        {/* Final Branding Line */}
        <div className="mt-32 text-center bg-gradient-to-br from-black to-gray-900 border border-accent/20 rounded-[2.5rem] p-12 md:p-20 shadow-3xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('/showroom.jpeg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              FROM SHOWROOM <span className="text-accent">→</span> TO PROOF ROOM
            </h3>
            <div className="h-1 w-32 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-xl md:text-2xl font-medium text-gray-300 italic max-w-2xl mx-auto">
              Building a completely transparent system for India&apos;s construction future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
