import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import './trajetoria.css'

interface Marco {
  ano: string
  titulo: string
  descricao: string
  link?: { texto: string; href: string }
}

const marcos: Marco[] = [
  {
    ano: '2007',
    titulo: 'Nasci',
    descricao: 'Nada de interessante ainda.',
  },
  {
    ano: '2023',
    titulo: 'Ensino médio técnico em DS',
    descricao: 'Entrei no Ensino Médio Técnico em Desenvolvimento de Sistemas, com mentoria da IBM.',
  },
  {
    ano: '2025',
    titulo: 'M.E.R.LIN — TCC',
    descricao:
      'Entreguei meu projeto de conclusão de curso: um software assistivo que permite pessoas com deficiência motora usarem notebooks com comandos faciais.',
    link: { texto: 'Ver no GitHub →', href: 'https://github.com/RgoSL/M.E.R.LIN' },
  },
  {
    ano: '2026',
    titulo: 'Fatec Zona Leste',
    descricao: 'Ingressei no curso de Análise e Desenvolvimento de Sistemas.',
  },
]

export default function Trajetoria() {
  return (
    <div className="trajetoria">
      <TextoDigitado texto="Minha trajetória" />

      <div className="trajetoria-linha">
        {marcos.map((marco) => (
          <article className="marco-card" key={marco.ano}>
            <span className="marco-ano">{marco.ano}</span>
            <h2>{marco.titulo}</h2>
            <p>{marco.descricao}</p>
            {marco.link && (
              <a
                className="marco-link"
                href={marco.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {marco.link.texto}
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}