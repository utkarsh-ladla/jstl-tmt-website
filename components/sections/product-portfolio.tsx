import Image from 'next/image'

export default function ProductPortfolio() {
  const productCategories = [
    {
      title: 'MS & GI Pipes',
      description: 'High-quality mild steel and galvanized iron pipes for diverse industrial applications',
      image: '/product/MS pipes.jpeg'
    },
    {
      title: 'ERW Steel Tubes',
      description: 'Electrically Resistance Welded tubes with superior strength and durability',
      image: '/product/ERW pipes.jpeg'
    },
    {
      title: 'Hollow Sections',
      description: 'Square, rectangular, and round hollow sections for structural applications',
      image: '/product/Hollow sectional pipes.jpeg'
    },
    {
      title: 'Angles, Channels & Sections',
      description: 'Structural angles, channels, and steel sections for construction',
      image: '/product/MS angles.jpeg'
    },
    {
      title: 'Fabricated Components',
      description: 'Custom fabricated steel components engineered to your specifications',
      image: '/product/p13.jpeg'
    },
    {
      title: 'Industrial Tubing',
      description: 'High-performance tubing solutions for industrial processing and systems',
      image: '/product/Industrial pipes.jpeg'
    },
    {
      title: 'Profile Sheets',
      description: 'Durable and aesthetic profile sheets for roofing and cladding',
      image: '/profilesheet.jpeg'
    },
    {
      title: 'Custom Steel Solutions',
      description: 'Tailored steel solutions for unique industrial and construction needs',
      image: '/product/p14.jpeg'
    },
  ]

  return (
    <section id="products" className="w-full bg-background py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-block bg-accent px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-black">PRODUCT ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Complete Steel Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            From pipes to structures — strengthening India&apos;s infrastructure across multiple sectors
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((product, index) => {
            return (
              <div
                key={index}
                className="group bg-black border border-white/20 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-bold text-accent mb-3">
                    {product.title}
                  </h3>
                  <p className="text-white text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Portfolio Highlight */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-background border border-accent/30 rounded-2xl p-10 text-center">
          <p className="text-foreground text-xl font-bold mb-3">
            Complete Coverage Across Sectors
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Whether you need pipes for industrial applications, tubes for structural work, or custom fabricated components, our complete product portfolio ensures you find exactly what you need for your next big project.
          </p>
        </div>
      </div>
    </section>
  )
}
