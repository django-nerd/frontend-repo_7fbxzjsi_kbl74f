const primary = '#4e612a'
const secondary = '#892606'

const features = [
  {
    title: 'Authentic Prints',
    desc: 'Sourced from trusted African mills and artisan collectives.',
    icon: '🧵'
  },
  {
    title: 'Ethical Craft',
    desc: 'Fair wages, transparent production, and small-batch runs.',
    icon: '🤝'
  },
  {
    title: 'Worldwide Shipping',
    desc: 'Carefully packed and shipped globally with tracking.',
    icon: '🌍'
  },
]

export default function Features() {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: primary }}>Why Emeno Afriq</h2>
          <p className="mt-3 text-gray-600">Crafted with purpose. Designed to stand out.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl border bg-white/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl" aria-hidden="true">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold" style={{ color: secondary }}>{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
