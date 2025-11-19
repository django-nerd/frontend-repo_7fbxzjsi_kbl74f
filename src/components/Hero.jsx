const primary = '#4e612a'
const secondary = '#892606'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(1200px 600px at 10% -10%, ${secondary}22, transparent 60%), radial-gradient(900px 500px at 110% 10%, ${primary}33, transparent 60%)` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium" style={{ backgroundColor: `${secondary}15`, color: secondary }}>
              New Season • Handcrafted
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight" style={{ color: primary }}>
              Emeno Afriq
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-prose">
              Vibrant, authentic African prints tailored for modern elegance. Discover limited collections crafted responsibly by local artisans.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#shop" className="px-6 py-3 rounded-md font-semibold text-white shadow-lg" style={{ backgroundColor: secondary }}>Shop Collection</a>
              <a href="#story" className="px-6 py-3 rounded-md font-semibold" style={{ color: secondary, border: `2px solid ${secondary}` }}>Our Story</a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-gray-700">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=80&q=80&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white"/>
                <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=80&q=80&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white"/>
                <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&q=80&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white"/>
              </div>
              <p><span className="font-semibold">2,500+</span> happy customers worldwide</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl blur-2xl opacity-30" style={{ background: `linear-gradient(135deg, ${primary}55, ${secondary}55)` }} />
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
              alt="African fabric display"
              className="relative rounded-3xl w-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
