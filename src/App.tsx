import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { FeaturesSection } from '@/components/sections/Features'
import { TestimonialsSection } from '@/components/sections/Testimonials'
import { GlobeSection } from '@/components/sections/Globe'
import { PricingSection } from '@/components/sections/Pricing'
import { FooterSection } from '@/components/sections/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <TestimonialsSection />
        <GlobeSection />
        <PricingSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
