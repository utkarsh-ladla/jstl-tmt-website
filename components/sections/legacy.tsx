import { Award, Factory, Shield, TrendingUp } from 'lucide-react'

export default function Legacy() {
  return (
    <section id="legacy" className="w-full bg-background py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-bold text-black uppercase tracking-wider">Our Heritage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            50+ Years of Nation Building
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                Established in 1973, <span className="text-primary font-bold">Jindal Steel Tubes Limited (JSTL)</span>, popularly known as <span className="italic">Jindal Globe</span>, is a proud part of the DS Jindal Group — a trusted name in India&apos;s steel industry for over 50 years.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent p-6 my-8 rounded-r-2xl">
                <p className="text-muted-foreground italic mb-0">
                  &quot;Our Founder, Late Shri Debi Sahai Jindal, was honored with the prestigious <span className="text-foreground font-bold not-italic">Padma Shri Award</span>, reflecting our strong legacy and contribution to nation building.&quot;
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  With manufacturing units across <span className="text-foreground font-semibold">Telangana, Uttar Pradesh, Madhya Pradesh, Maharashtra, Gujarat, Chhattisgarh, Bihar and Jharkhand</span> and an installed capacity of <span className="text-foreground font-semibold">~100K MTPA</span>, JSTL delivers high-quality steel products adhering to strict BIS standards.
                </p>
                <p>
                  Our product portfolio includes MS Pipes, GI Pipes, GP Pipes, structural sections, roofing sheets, and wire mesh — serving leading infrastructure, OEM, and government projects across India.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Now Introducing – JSTL TMT Bars</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Expanding our legacy of trust, we now offer JSTL TMT Bars, engineered for superior strength, durability, and safety making us a complete steel solutions provider under the DS Jindal Group.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Section */}
          <div className="flex flex-col gap-4">
            {/* Image — fully visible, no overlay */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800 transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="/heritage.jpeg"
                alt="JSTL Industrial Heritage"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats row — below the image */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-accent rounded-2xl py-5 px-3 flex flex-col items-center text-center shadow-lg gap-1">
                <p className="text-4xl font-black text-black leading-none">8</p>
                <p className="text-xs font-bold text-black/70 uppercase tracking-wide">Mfg. States</p>
              </div>
              <div className="bg-accent rounded-2xl py-5 px-3 flex flex-col items-center text-center shadow-lg gap-1">
                <p className="text-4xl font-black text-black leading-none">50+</p>
                <p className="text-xs font-bold text-black/70 uppercase tracking-wide">Years Legacy</p>
              </div>
              <div className="bg-accent rounded-2xl py-5 px-3 flex flex-col items-center text-center shadow-lg gap-1">
                <p className="text-4xl font-black text-black leading-none">100K+</p>
                <p className="text-xs font-bold text-black/70 uppercase tracking-wide">MT Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
