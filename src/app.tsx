import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/main/App'
import Sobre_mim from "./pages/sobreMim/sobreMim.tsx"
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mim" element={<Sobre_mim />} />
      </Routes>

    <Footer/>
    </BrowserRouter>
  )
}