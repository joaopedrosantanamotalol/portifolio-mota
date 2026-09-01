
import ImagemEu from '@/assets/mota.jpeg'
import './ficheiro-mota.css'

export default function FicheiroMota(){
    return (
    <>

    <div className="titulo">
      <h1>Me conheça</h1>
    </div>

    <div className="container">
        <img src={ImagemEu} alt="João Mota" />

        <ul>
            <li>Me chamo João Mota</li>
            <li>Sou estudante de Análise e Desenvolvimento de Sistemas na FATEC - ZL</li>
            <li>Desenvolvedor Full Stack, Spring & React</li>
            <li>Tenho interesse em desenvolvimento web e backend</li>
        </ul>
    </div>

    </>
    );
}