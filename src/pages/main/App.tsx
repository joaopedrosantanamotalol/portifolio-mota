import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import '../../global/global.css'
import main from './App.module.css'

export default function App() {

  return (
    <>
    <div className="app">
    <Navbar/>
    <main>
    <p className={main.teste}>Olá! em algum momento adcionarei informações aqui!</p>
    </main>
    <Footer/>
    </div>
    </>
  )
}

