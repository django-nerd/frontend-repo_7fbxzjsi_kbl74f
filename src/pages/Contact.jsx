const primary = '#4e612a'
const secondary = '#892606'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 border-b" style={{ borderColor: '#e5e7eb' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold" style={{ color: primary }}>Contact</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">We’d love to hear from you. Send us a message and our team will get back to you within 1–2 business days.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">First name</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2" style={{ borderColor: '#e5e7eb', focusRingColor: secondary }} placeholder="Ama" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Last name</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2" style={{ borderColor: '#e5e7eb' }} placeholder="Okoye" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" style={{ borderColor: '#e5e7eb' }} placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="5" className="mt-1 w-full rounded-md border px-3 py-2" style={{ borderColor: '#e5e7eb' }} placeholder="Tell us what you have in mind..." />
            </div>
            <div className="sm:col-span-2">
              <button type="button" className="px-6 py-3 rounded-md text-white font-semibold" style={{ backgroundColor: secondary }}>Send message</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
