import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global/global.css'
import Home from './pages/main/App'
import Sobre_mim from "./pages/sobreMim/sobreMim.tsx"
import Projetos from "./pages/projetos/projetos.tsx";
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer.tsx'
import Trajetoria from './pages/trajetoria/trajetoria.tsx';
export default function App() {
return (
<BrowserRouter>
<div className="app">
<Navbar />

<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sobre-mim" element={<Sobre_mim />} />
<Route path="/projetos" element={<Projetos />} />
<Route path="/trajetoria" element={<Trajetoria />} />
</Routes>
</main>
<Footer/>
</div>

</BrowserRouter>
  )
}