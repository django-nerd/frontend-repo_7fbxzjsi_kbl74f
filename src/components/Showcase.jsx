const primary = '#4e612a'
const secondary = '#892606'

const items = [
  { id: 1, name: 'Kente Wrap Dress', price: '$120', img: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Ankara Headwrap', price: '$30', img: 'https://images.unsplash.com/photo-1520975954732-35dd222996f0?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Bogolanfini Scarf', price: '$55', img: 'https://images.unsplash.com/photo-1490481651871-ab68de22504a?q=80&w=1200&auto=format&fit=crop' },
]

export default function Showcase() {
  return (
    <section id="shop" className="py-20" style={{ backgroundColor: `${primary}0D` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: primary }}>Featured Pieces</h2>
            <p className="mt-2 text-gray-700">Limited drops — secure your favorite before it’s gone.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-5 py-2.5 rounded-md text-white font-semibold" style={{ backgroundColor: secondary }}>View All</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="group rounded-2xl overflow-hidden bg-white shadow-sm border">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 px-2 py-1.5 rounded text-xs font-semibold text-white" style={{ backgroundColor: `${secondary}CC` }}>Limited</div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg" style={{ color: primary }}>{item.name}</h3>
                <div className="mt-1 text-gray-700">{item.price}</div>
                <button className="mt-4 w-full px-4 py-2 rounded-md font-medium text-white" style={{ backgroundColor: primary }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
