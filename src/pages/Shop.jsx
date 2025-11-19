const primary = '#4e612a'
const secondary = '#892606'

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 border-b" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold" style={{ color: primary }}>Shop</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">Browse our latest arrivals and bestsellers.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6,7,8,9].map((i) => (
            <article key={i} className="rounded-2xl overflow-hidden border hover:shadow-lg transition-shadow" style={{ borderColor: '#e5e7eb' }}>
              <img
                src={`https://images.unsplash.com/photo-1520975922322-c0ea8ec9e38b?q=80&w=1200&auto=format&fit=crop`}
                alt="Product"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold" style={{ color: primary }}>Ankara Piece {i}</h3>
                <p className="mt-2 text-sm text-gray-600">Hand-finished detailing. Limited availability.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold" style={{ color: secondary }}>$120</span>
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
