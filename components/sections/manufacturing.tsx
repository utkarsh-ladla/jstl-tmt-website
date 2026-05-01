import { MapPin, Shield, Zap } from 'lucide-react'

export default function Manufacturing() {
  const facilities = [
    { state: 'Uttar Pradesh', region: 'Northern India' },
    { state: 'Madhya Pradesh', region: 'Central India' },
    { state: 'Maharashtra', region: 'Western India' },
    { state: 'Gujarat', region: 'Western India' },
    { state: 'Telangana', region: 'Southern India' },
    { state: 'Chhattisgarh', region: 'Central-Eastern India' },
    { state: 'Bihar', region: 'Eastern India' },
    { state: 'Jharkhand', region: 'Eastern India' },
  ]

  return (
    <section className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black uppercase tracking-wider">Manufacturing Network</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
            Built Across India. Controlled by Process.
          </h2>
          <p className="text-lg text-muted-foreground">
            Manufactured through a growing network across eight key industrial states
          </p>
        </div>

        {/* Facilities Map */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{facility.state}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-tight">{facility.region}</p>
            </div>
          ))}
        </div>

        {/* Quality Systems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/20 transition-all">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Strict Quality Protocols</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Rigorous testing and quality control measures at every production stage to maintain JSTL standards.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/20 transition-all">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Automated Processes</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              State-of-the-art automated manufacturing ensuring consistency and precision in every bar produced.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 hover:border-accent/20 transition-all">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Multi-Stage Testing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Comprehensive testing systems including chemical and mechanical analysis for peak performance.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-black text-white rounded-2xl p-10 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <p className="text-5xl font-black text-accent mb-2">8</p>
              <p className="text-white font-bold uppercase tracking-wider">States</p>
              <p className="text-sm text-gray-400">Production Network</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black text-accent mb-2">100K+</p>
              <p className="text-white font-bold uppercase tracking-wider">MT Capacity</p>
              <p className="text-sm text-gray-400">Annual Capability</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-black text-accent mb-2">50+</p>
              <p className="text-white font-bold uppercase tracking-wider">Years</p>
              <p className="text-sm text-gray-400">Industry Excellence</p>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>

      </div>
    </section>
  )
}
