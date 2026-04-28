import { Wrench, Zap, Box } from 'lucide-react'

export default function ProductPortfolio() {
  const productCategories = [
    {
      title: 'MS & GI Pipes',
      icon: Box,
      description: 'High-quality mild steel and galvanized iron pipes for diverse industrial applications',
    },
    {
      title: 'ERW Steel Tubes',
      icon: Zap,
      description: 'Electrically Resistance Welded tubes with superior strength and durability',
    },
    {
      title: 'Hollow Sections',
      icon: Wrench,
      description: 'Square, rectangular, and round hollow sections for structural applications',
    },
    {
      title: 'Angles & Channels',
      icon: Wrench,
      description: 'Structural angles, channels, and steel sections for construction',
    },
    {
      title: 'Fabricated Components',
      icon: Box,
      description: 'Custom fabricated steel components engineered to your specifications',
    },
    {
      title: 'Custom Solutions',
      icon: Zap,
      description: 'Tailored steel solutions for unique industrial and construction needs',
    },
  ]

  return (
    <section id="products" className="w-full bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-accent">PRODUCT ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Complete Steel Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            From pipes to structures — strengthening India&apos;s infrastructure across multiple sectors
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Portfolio Highlight */}
        <div className="mt-12 bg-gradient-to-r from-accent/10 to-background border border-accent/30 rounded-xl p-8 text-center">
          <p className="text-foreground text-lg font-semibold mb-2">
            Complete Coverage Across Sectors
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need pipes for industrial applications, tubes for structural work, or custom fabricated components, our complete product portfolio ensures you find exactly what you need.
          </p>
        </div>
      </div>
    </section>
  )
}
