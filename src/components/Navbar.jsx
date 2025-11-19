import { Menu } from 'lucide-react'
import { useState } from 'react'

const primary = '#4e612a'
const secondary = '#892606'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 shadow" style={{ backgroundColor: primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-baseline gap-2">
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#fff' }}>emeno</span>
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: secondary }}>afriq</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-white/90">
            <a href="#collections" className="hover:text-white transition-colors">Collections</a>
            <a href="#story" className="hover:text-white transition-colors">Our Story</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#shop" className="px-4 py-2 rounded-md font-medium" style={{ backgroundColor: secondary, color: 'white' }}>Shop Now</a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#collections" className="block text-white/90">Collections</a>
            <a href="#story" className="block text-white/90">Our Story</a>
            <a href="#contact" className="block text-white/90">Contact</a>
            <a href="#shop" className="inline-block px-4 py-2 rounded-md font-medium" style={{ backgroundColor: secondary, color: 'white' }}>Shop Now</a>
          </div>
        )}
      </div>
    </header>
  )
}
