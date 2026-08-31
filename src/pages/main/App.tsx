import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import '../../global/global.css'
import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'

export default function App() {

  return (
    <>
    <div className="app">
    <Navbar/>

    <main>

    <TextoDigitado
    texto='Olá, Bem-vindo ao meu web Portifolio'
    />

    </main>

    <Footer/>
    </div>
    </>
  )
}

