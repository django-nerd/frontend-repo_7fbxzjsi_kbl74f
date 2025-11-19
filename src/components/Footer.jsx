const primary = '#4e612a'
const secondary = '#892606'

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-10 text-white" style={{ backgroundColor: primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">emeno <span style={{ color: secondary }}>afriq</span></h3>
            <p className="mt-3 text-white/80">Premium African textiles and apparel. Designed with love, crafted with care.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#collections" className="hover:text-white">Collections</a></li>
              <li><a href="#shop" className="hover:text-white">Shop</a></li>
              <li><a href="#story" className="hover:text-white">Our Story</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li>Shipping & Returns</li>
              <li>Care Instructions</li>
              <li>Size Guide</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Stay in the loop</h4>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 rounded-md text-gray-900" />
              <button type="submit" className="px-4 py-2 rounded-md font-semibold text-white" style={{ backgroundColor: secondary }}>Join</button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Emeno Afriq. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
