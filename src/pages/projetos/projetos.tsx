import { useEffect, useRef } from 'react'
import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import { projetos } from '../../data/projetos'
import './projetos.css'

export default function Projetos() {
  const cartoesRef = useRef<(HTMLElement | null)[]>([])

  // revela cada card com uma animação suave conforme ele entra na tela
  useEffect(() => {
    const cartoes = cartoesRef.current.filter((el): el is HTMLElement => el !== null)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cartoes.forEach((el) => el.classList.add('projeto-card--visivel'))
      return
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('projeto-card--visivel')
            observer.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    cartoes.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="projetos">
      <TextoDigitado texto="Meus projetos" />

      <div className="projetos-lista">
        {projetos.map((projeto, indice) => {
          const concluido = projeto.status === 'Concluído'

          return (
            <article
              className={`projeto-card${concluido ? ' projeto-card--concluido' : ''}`}
              key={projeto.id}
              ref={(el) => {
                cartoesRef.current[indice] = el
              }}
              style={{ transitionDelay: `${(indice % 4) * 0.08}s` }}
            >
              <div className="projeto-info">
                <header className="projeto-topo">
                  <h2>{projeto.nome}</h2>
                  {projeto.status && (
                    <span
                      className={`projeto-status${concluido ? ' projeto-status--concluido' : ' projeto-status--andamento'}`}
                    >
                      {concluido ? (
                        <span className="projeto-status-check">✓</span>
                      ) : (
                        <span className="projeto-status-dot" />
                      )}
                      {projeto.status}
                    </span>
                  )}
                </header>

                <p className="projeto-resumo">{projeto.resumo}</p>

                <div className="projeto-tags">
                  {projeto.tecnologias.map((tecnologia, i) => (
                    <span
                      className="projeto-tag"
                      key={tecnologia}
                      style={{ transitionDelay: `${(indice % 4) * 0.08 + i * 0.04}s` }}
                    >
                      {tecnologia}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projeto-lateral">
                <ul className="projeto-destaques">
                  {projeto.destaques.map((destaque) => (
                    <li key={destaque}>{destaque}</li>
                  ))}
                </ul>

                <a
                  className="projeto-link"
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Ver no GitHub</span>
                  <span className="projeto-link-seta">→</span>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}