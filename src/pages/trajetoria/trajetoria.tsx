import { useEffect, useRef } from 'react'
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
    descricao:
      'Entrei no Ensino Médio Técnico em Desenvolvimento de Sistemas, com mentoria da IBM.',
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
  const nosRef = useRef<(HTMLElement | null)[]>([])

  // revela cada marco conforme entra na tela, e vai "acendendo" o traço da árvore junto
  useEffect(() => {
    const nos = nosRef.current.filter((el): el is HTMLElement => el !== null)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nos.forEach((el) => el.classList.add('marco--visivel'))
      return
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('marco--visivel')
            observer.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.35 },
    )

    nos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="trajetoria">
      <TextoDigitado texto="Minha trajetória" />

      <div className="arvore">
        {marcos.map((marco, indice) => (
          <div
            className="marco"
            key={marco.ano}
            ref={(el) => {
              nosRef.current[indice] = el
            }}
            style={{ transitionDelay: `${indice * 0.12}s` }}
          >
            <div className="marco-linha">
              <span className="marco-ponto" />
            </div>

            <article className="marco-card">
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
          </div>
        ))}
      </div>
    </div>
  )
}