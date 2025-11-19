const primary = '#4e612a'
const secondary = '#892606'

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 border-b" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold" style={{ color: primary }}>Collections</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Explore our rotating capsules inspired by regions across the continent. Each drop is crafted in small batches and tells a unique story.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map((i) => (
            <article key={i} className="rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow" style={{ borderColor: '#e5e7eb' }}>
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop`}
                  alt="Collection"
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full text-white" style={{ backgroundColor: secondary }}>
                  New
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold" style={{ color: primary }}>Heritage {i}</h3>
                <p className="mt-2 text-sm text-gray-600">Limited edition capsule featuring bold geometrics and hand-dyed textures.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold" style={{ color: secondary }}>$89</span>
                  <button className="px-4 py-2 rounded-md text-white text-sm font-semibold" style={{ backgroundColor: secondary }}>Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
