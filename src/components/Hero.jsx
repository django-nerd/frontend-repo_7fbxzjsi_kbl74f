import { useEffect, useMemo, useState } from 'react'

const primary = '#4e612a'
const secondary = '#892606'

const slidesData = [
  {
    badge: 'New Season • Handcrafted',
    title: 'Embrace the Fabric of Africa',
    description:
      'Vibrant, authentic prints crafted by local artisans. Step into color, culture, and contemporary silhouettes.',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    ctaPrimary: { label: 'Shop Collection', to: '/shop' },
    ctaSecondary: { label: 'Our Story', to: '/story' },
  },
  {
    badge: 'Limited Drops • Ethical',
    title: 'Limited Runs. Maximum Expression.',
    description:
      'Small-batch releases mean your style stays unique. Sustainably produced with respect for people and planet.',
    image:
      'https://images.unsplash.com/photo-1548109177-7f3ad02461ef?q=80&w=1600&auto=format&fit=crop',
    ctaPrimary: { label: 'View Collections', to: '/collections' },
    ctaSecondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    badge: 'Worldwide Shipping',
    title: 'From Lagos to London',
    description:
      'We ship globally with care. Discover pieces that travel beautifully and wear effortlessly.',
    image:
      'https://images.unsplash.com/photo-1520975922322-c0ea8ec9e38b?q=80&w=1600&auto=format&fit=crop',
    ctaPrimary: { label: 'Start Shopping', to: '/shop' },
    ctaSecondary: { label: 'Learn More', to: '/story' },
  },
]

export default function Hero() {
  const slides = useMemo(() => slidesData, [])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [slides.length, paused])

  const current = slides[index]

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(1200px 600px at 10% -10%, ${secondary}22, transparent 60%), radial-gradient(900px 500px at 110% 10%, ${primary}33, transparent 60%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="relative h-[520px] sm:h-[560px] md:h-[600px]">
            {/* Slides */}
            {slides.map((slide, i) => (
              <Slide key={i} slide={slide} active={i === index} />)
            )}

            {/* Controls */}
            <button
              aria-label="Previous slide"
              onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow"
            >
              ‹
            </button>
            <button
              aria-label="Next slide"
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={
                    'h-2.5 rounded-full transition-all ' +
                    (i === index ? 'w-6' : 'w-2.5')
                  }
                  style={{ backgroundColor: i === index ? secondary : '#ffffffaa' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Slide({ slide, active }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="grid lg:grid-cols-2 gap-0 h-full">
        <div className="relative order-2 lg:order-1 p-8 sm:p-12 flex flex-col justify-center bg-white/90 backdrop-blur">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium w-max"
            style={{ backgroundColor: `${secondary}15`, color: secondary }}
          >
            {slide.badge}
          </div>
          <h1
            className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight"
            style={{ color: primary }}
          >
            {slide.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-700 max-w-prose">{slide.description}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href={slide.ctaPrimary.to} className="px-6 py-3 rounded-md font-semibold text-white shadow-lg" style={{ backgroundColor: secondary }}>
              {slide.ctaPrimary.label}
            </a>
            <a
              href={slide.ctaSecondary.to}
              className="px-6 py-3 rounded-md font-semibold"
              style={{ color: secondary, border: `2px solid ${secondary}` }}
            >
              {slide.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div
            className="absolute -inset-8 rounded-3xl blur-2xl opacity-30"
            style={{ background: `linear-gradient(135deg, ${primary}55, ${secondary}55)` }}
          />
          <img
            src={slide.image}
            alt="Emeno Afriq highlight"
            className="relative w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
