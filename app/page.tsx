import Header from '@/components/sections/header'
import HeroSlider from '@/components/sections/hero-slider'
import Hero from '@/components/sections/hero'
import Legacy from '@/components/sections/legacy'
import ProductPortfolio from '@/components/sections/product-portfolio'
import TMTBars from '@/components/sections/tmt-bars'
import Innovation from '@/components/sections/innovation'
import Specifications from '@/components/sections/specifications'
import Manufacturing from '@/components/sections/manufacturing'
import Pricing from '@/components/sections/pricing'
import ProjectInquiry from '@/components/sections/project-inquiry'
import FAQ from '@/components/sections/faq'
import MediaCoverage from '@/components/sections/media-coverage'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSlider />
      <Hero />
      <Legacy />
      <ProductPortfolio />
      <TMTBars />
      <Innovation />
      <Specifications />
      <Manufacturing />
      <Pricing />
      <div id="project-inquiry">
        <ProjectInquiry />
      </div>
      <FAQ />
      <MediaCoverage />
      <Footer />
    </main>
  )
}
