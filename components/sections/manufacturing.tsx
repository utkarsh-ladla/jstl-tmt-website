import { MapPin, Shield, Zap } from 'lucide-react'

export default function Manufacturing() {
  const facilities = [
    { state: 'Uttar Pradesh', region: 'Northern India' },
    { state: 'Madhya Pradesh', region: 'Central India' },
    { state: 'Maharashtra', region: 'Western India' },
    { state: 'Chhattisgarh', region: 'Central-Eastern India' },
  ]

  return (
    <section className="w-full bg-background py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">NATIONAL PRESENCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Manufacturing Network Built Across India
          </h2>
          <p className="text-lg text-muted-foreground">
            Strategically located production facilities ensuring quality delivery across the nation
          </p>
        </div>

        {/* Facilities Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/30 transition text-center"
            >
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-foreground mb-1">{facility.state}</h3>
              <p className="text-sm text-muted-foreground">{facility.region}</p>
            </div>
          ))}
        </div>

        {/* Quality Systems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Strict Quality Protocols</h3>
            <p className="text-muted-foreground text-sm">
              Rigorous testing and quality control measures at every production stage
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Automated Processes</h3>
            <p className="text-muted-foreground text-sm">
              State-of-the-art automated manufacturing for consistent product quality
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Multi-Stage Testing</h3>
            <p className="text-muted-foreground text-sm">
              Comprehensive testing systems ensuring product performance standards
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-accent/15 to-background border border-accent/40 rounded-xl p-8">
          <h3 className="text-xl font-bold text-foreground mb-8 text-center">
            Manufacturing Excellence Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">4</p>
              <p className="text-foreground font-semibold">States</p>
              <p className="text-sm text-muted-foreground">Production coverage</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100K+</p>
              <p className="text-foreground font-semibold">MT Capacity</p>
              <p className="text-sm text-muted-foreground">Annual production capability</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-foreground font-semibold">Uptime</p>
              <p className="text-sm text-muted-foreground">Production reliability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
