import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyAlfredo from './components/WhyAlfredo'
import Preview from './components/Preview'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Atmosphere overlays */}
      <div className="noise-overlay" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <main>
        <Hero />
        <HowItWorks />
        <WhyAlfredo />
        <Preview />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
