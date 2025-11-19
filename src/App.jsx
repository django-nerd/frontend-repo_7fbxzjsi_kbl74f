import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <section id="story" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmFmdHxlbnwwfDB8fHwxNzYzNTU4MTQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Craft" className="rounded-3xl shadow-lg" />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#4e612a' }}>Rooted in Heritage</h2>
            <p className="mt-4 text-gray-700">We partner with artisans across the continent to bring you timeless designs that honor tradition while embracing modern silhouettes. Each piece tells a story of craft, community, and culture.</p>
            <div className="mt-6 flex gap-4">
              <div className="px-4 py-3 rounded-lg text-white font-semibold" style={{ backgroundColor: '#892606' }}>Limited Runs</div>
              <div className="px-4 py-3 rounded-lg font-semibold" style={{ color: '#892606', border: '2px solid #892606' }}>Sustainable</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
