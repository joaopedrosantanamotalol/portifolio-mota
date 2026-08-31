

import '../../global/global.css'

import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import Ficheiro from '../../components/ficheiro_mota/ficheiro-mota'

export default function App() {

  return (
    <>
    <div className="home">

    <TextoDigitado
    texto='Olá, Bem-vindo ao meu web Portifolio'
    />

    <Ficheiro/>

    </div>
    </>
  )
}

