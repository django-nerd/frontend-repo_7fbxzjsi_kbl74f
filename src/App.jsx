import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import CollectionsPage from './pages/Collections'
import StoryPage from './pages/Story'
import ContactPage from './pages/Contact'
import ShopPage from './pages/Shop'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  )
}
