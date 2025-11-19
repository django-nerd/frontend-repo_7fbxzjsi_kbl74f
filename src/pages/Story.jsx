const primary = '#4e612a'
const secondary = '#892606'

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 border-b" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold" style={{ color: primary }}>Our Story</h1>
          <p className="mt-3 text-gray-700 max-w-3xl">
            Emeno Afriq celebrates Africa’s rich textile heritage through modern design. We partner closely with artisan cooperatives to ensure fair pay, sustainable practices, and timeless quality.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img className="rounded-2xl shadow" src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1400&auto=format&fit=crop" alt="Craft" />
            <div>
              <h2 className="text-2xl font-bold" style={{ color: primary }}>Rooted in Heritage</h2>
              <p className="mt-3 text-gray-700">Each collection is a collaboration with master dyers, weavers, and tailors. Our small-batch approach keeps waste low and craftsmanship high.</p>
              <div className="mt-4 flex gap-3">
                <span className="px-3 py-2 rounded-lg text-white text-sm font-semibold" style={{ backgroundColor: secondary }}>Limited Runs</span>
                <span className="px-3 py-2 rounded-lg text-sm font-semibold" style={{ color: secondary, border: `2px solid ${secondary}` }}>Sustainable</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
