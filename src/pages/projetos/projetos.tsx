import { useEffect, useRef, useState } from 'react'
import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import { projetos } from '../../data/projetos'
import './projetos.css'

// Extrai "owner/repo" de um link do GitHub
function repoDoLink(link: string): string | null {
  try {
    const url = new URL(link)
    if (url.hostname !== 'github.com') return null

    const [owner, repo] = url.pathname.replace(/^\/+/, '').split('/')
    if (!owner || !repo) return null

    return `${owner}/${repo}`
  } catch {
    return null
  }
}

export default function Projetos() {
  const cartoesRef = useRef<(HTMLElement | null)[]>([])
  const [semImagem, setSemImagem] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const cartoes = cartoesRef.current.filter(
      (el): el is HTMLElement => el !== null,
    )

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
      { threshold: 0.15 },
    )

    cartoes.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="projetos">
      <TextoDigitado texto="Meus projetos" />

      <div className="projetos-grade">
        {projetos.map((projeto, indice) => {
          const concluido = projeto.status === 'Concluído'
          const repo = repoDoLink(projeto.link)
          const imagemFalhou = semImagem[projeto.id]
          const isMerlin = projeto.id === 'python-assistive-software'

          return (
            <article
              className={`projeto-card${concluido ? ' projeto-card--concluido' : ''}`}
              key={projeto.id}
              ref={(el) => {
                cartoesRef.current[indice] = el
              }}
              style={{ transitionDelay: `${(indice % 4) * 0.08}s` }}
            >
              <div className="projeto-capa">
                {isMerlin ? (
                  <img
                    src="/merlin.png"
                    alt="Capa do projeto Merlin"
                    loading="lazy"
                  />
                ) : repo && !imagemFalhou ? (
                  <img
                    src={`https://opengraph.githubassets.com/1/${repo}`}
                    alt={`Capa do repositório ${projeto.nome}`}
                    loading="lazy"
                    onError={() =>
                      setSemImagem((atual) => ({
                        ...atual,
                        [projeto.id]: true,
                      }))
                    }
                  />
                ) : (
                  <span className="projeto-capa-fallback">
                    {projeto.nome.charAt(0)}
                  </span>
                )}

                {projeto.status && (
                  <span
                    className={`projeto-status${
                      concluido
                        ? ' projeto-status--concluido'
                        : ' projeto-status--andamento'
                    }`}
                  >
                    {concluido ? (
                      <span className="projeto-status-check">✓</span>
                    ) : (
                      <span className="projeto-status-dot" />
                    )}
                    {projeto.status}
                  </span>
                )}
              </div>

              <div className="projeto-corpo">
                <h2>{projeto.nome}</h2>

                <div className="projeto-tags">
                  {projeto.tecnologias.slice(0, 4).map((tecnologia) => (
                    <span className="projeto-tag" key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))}
                </div>

                <p className="projeto-resumo">{projeto.resumo}</p>

                <div className="projeto-rodape">
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
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}