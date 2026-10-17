import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent } from 'react'
import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import { projetos } from '../../data/projetos'
import './projetos.css'

// tira "owner/repo" de um link do GitHub, pra montar a imagem de capa automaticamente
function repoDoLink(link: string): string | null {
  try {
    const url = new URL(link)
    if (url.hostname !== 'github.com') return null

    const [owner, repo] = url.pathname.replace(/^\//, '').split('/')
    if (!owner || !repo) return null

    return `${owner}/${repo}`
  } catch {
    return null
  }
}

// ordem da animação de entrada (cada número vira um atraso no CSS)
const ordem = (i: number) => ({ '--i': i }) as CSSProperties

// inclina a janela em 3D e move a luz conforme o mouse (só com mouse, não no toque)
function aoMoverMouse(e: PointerEvent<HTMLDivElement>) {
  if (e.pointerType !== 'mouse') return

  const el = e.currentTarget
  const caixa = el.getBoundingClientRect()
  const x = (e.clientX - caixa.left) / caixa.width
  const y = (e.clientY - caixa.top) / caixa.height

  el.style.setProperty('--mx', `${x * 100}%`)
  el.style.setProperty('--my', `${y * 100}%`)
  el.style.setProperty('--rx', `${(0.5 - y) * 8}deg`)
  el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
}

function aoSairMouse(e: PointerEvent<HTMLDivElement>) {
  const el = e.currentTarget
  el.style.setProperty('--rx', '0deg')
  el.style.setProperty('--ry', '0deg')
}

export default function Projetos() {
  const itensRef = useRef<(HTMLElement | null)[]>([])
  const [semImagem, setSemImagem] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const itens = itensRef.current.filter((el): el is HTMLElement => el !== null)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      itens.forEach((el) => el.classList.add('projeto--visivel'))
      return
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('projeto--visivel')
            observer.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    itens.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="projetos">
      <TextoDigitado texto="Meus projetos" />

      <div className="projetos-lista">
        {projetos.map((projeto, indice) => {
          const concluido = projeto.status === 'Concluído'
          const repo = repoDoLink(projeto.link)
          const imagemFalhou = semImagem[projeto.id]

          return (
            <article
              className="projeto"
              key={projeto.id}
              ref={(el) => {
                itensRef.current[indice] = el
              }}
            >
              <div className="projeto-palco projeto-anim" style={ordem(0)}>
                <div
                  className="projeto-janela"
                  onPointerMove={aoMoverMouse}
                  onPointerLeave={aoSairMouse}
                >
                  <div className="projeto-barra" aria-hidden="true">
                    <span className="projeto-barra-ponto" />
                    <span className="projeto-barra-ponto" />
                    <span className="projeto-barra-ponto" />
                    <span className="projeto-barra-caminho">
                      {repo ? `github.com/${repo}` : projeto.nome}
                    </span>
                  </div>

                  <div className="projeto-capa">
                    {repo && !imagemFalhou ? (
                      <img
                        src={`https://opengraph.githubassets.com/1/${repo}`}
                        alt={`Capa do repositório ${projeto.nome}`}
                        loading="lazy"
                        onError={() =>
                          setSemImagem((atual) => ({ ...atual, [projeto.id]: true }))
                        }
                      />
                    ) : (
                      <span className="projeto-capa-fallback">{projeto.nome.charAt(0)}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="projeto-corpo">
                {projeto.status && (
                  <span
                    className={`projeto-anim projeto-status${
                      concluido ? ' projeto-status--concluido' : ''
                    }`}
                    style={ordem(1)}
                  >
                    {concluido ? (
                      <svg
                        className="projeto-status-check"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 8.5 6.5 12 13 4.5" />
                      </svg>
                    ) : (
                      <span className="projeto-status-dot" aria-hidden="true" />
                    )}
                    {projeto.status}
                  </span>
                )}

                <h2 className="projeto-anim" style={ordem(2)}>
                  {projeto.nome}
                </h2>

                <p className="projeto-anim projeto-resumo" style={ordem(3)}>
                  {projeto.resumo}
                </p>

                <ul className="projeto-anim projeto-tags" style={ordem(4)}>
                  {projeto.tecnologias.slice(0, 5).map((tecnologia, t) => (
                    <li
                      className="projeto-tag"
                      key={tecnologia}
                      style={{ '--t': t } as CSSProperties}
                    >
                      {tecnologia}
                    </li>
                  ))}
                </ul>

                <a
                  className="projeto-anim projeto-link"
                  style={ordem(5)}
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Ver no GitHub</span>
                  <svg
                    className="projeto-link-seta"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 8h11M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}