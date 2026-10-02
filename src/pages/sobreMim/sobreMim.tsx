import { useEffect, useRef } from 'react'
import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import './sobreMim.css'

const gostos = ['Backend', 'Java', 'Spring Boot', 'Arquitetura', 'DevOps', 'Docker']
const experiencia = ['SQL', 'LSP', 'Integração', 'Análise de dados']

export default function SobreMim() {
  const cartoesRef = useRef<(HTMLElement | null)[]>([])

  // revela cada card com uma animação suave conforme ele entra na tela
  useEffect(() => {
    const cartoes = cartoesRef.current.filter((el): el is HTMLElement => el !== null)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cartoes.forEach((el) => el.classList.add('sobre-card--visivel'))
      return
    }

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('sobre-card--visivel')
            observer.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    cartoes.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const registrar = (indice: number) => (el: HTMLElement | null) => {
    cartoesRef.current[indice] = el
  }

  return (
    <div className="sobre">
      <TextoDigitado texto="Sobre mim" />

      <div className="sobre-grade">
        <section
          className="sobre-card"
          ref={registrar(0)}
          style={{ transitionDelay: '0s' }}
        >
          <h2>Quem eu sou</h2>
          <p>
            Sou o João Pedro Santana Mota, tenho 18 anos e gosto de programar e
            de estudar. Meu foco é backend com Java e Spring Boot, e arquitetura
            de software é o assunto que mais me interessa.
          </p>
        </section>

        <section
          className="sobre-card"
          ref={registrar(1)}
          style={{ transitionDelay: '0.08s' }}
        >
          <h2>Formação</h2>
          <ul className="sobre-lista">
            <li>
              <strong>Análise e Desenvolvimento de Sistemas</strong>
              <span>Fatec Zona Leste · cursando</span>
            </li>
            <li>
              <strong>Ensino médio técnico em Desenvolvimento de Sistemas</strong>
              <span>Concluído</span>
            </li>
          </ul>
        </section>

        <section
          className="sobre-card"
          ref={registrar(2)}
          style={{ transitionDelay: '0.16s' }}
        >
          <h2>Experiência</h2>
          <ul className="sobre-lista">
            <li>
              <strong>Synergie Consulting</strong>
            </li>
          </ul>
          <div className="sobre-tags">
            {experiencia.map((item) => (
              <span className="sobre-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          className="sobre-card"
          ref={registrar(3)}
          style={{ transitionDelay: '0.24s' }}
        >
          <h2>Do que eu gosto</h2>
          <div className="sobre-tags">
            {gostos.map((item) => (
              <span className="sobre-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section
          className="sobre-card sobre-card--linha"
          ref={registrar(4)}
          style={{ transitionDelay: '0.32s' }}
        >
          <h2>Fora do código</h2>
          <p>Sei nadar e amo a minha namorada, Giovanna</p>
        </section>
      </div>
    </div>
  )
}