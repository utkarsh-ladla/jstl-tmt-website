import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import Legacy from '@/components/sections/legacy'
import ProductPortfolio from '@/components/sections/product-portfolio'
import TMTBars from '@/components/sections/tmt-bars'
import Innovation from '@/components/sections/innovation'
import Specifications from '@/components/sections/specifications'
import Manufacturing from '@/components/sections/manufacturing'
import Pricing from '@/components/sections/pricing'
import DealerInquiry from '@/components/sections/dealer-inquiry'
import ProjectInquiry from '@/components/sections/project-inquiry'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Legacy />
      <ProductPortfolio />
      <TMTBars />
      <Innovation />
      <Specifications />
      <Manufacturing />
      <Pricing />
      <DealerInquiry />
      <div id="project-inquiry">
        <ProjectInquiry />
      </div>
      <Footer />
    </main>
  )
}
