import { useEffect, useRef } from 'react'
import LinhaeImagem from '../linhaEIcone/linhaeicone';
import './Footer.css'

const itens = [
  {
    rotulo: 'GitHub',
    texto: 'joaopedrosantanamotalol',
    href: 'https://github.com/joaopedrosantanamotalol',
  },
  {
    rotulo: 'Email',
    texto: 'Joaopedromotati@gmail.com',
    href: 'mailto:Joaopedromotati@gmail.com',
  },
  {
    rotulo: 'LinkedIn',
    texto: 'joao-motati',
    href: 'https://linkedin.com/in/joao-motati',
  },
]

const VELOCIDADE_PX_POR_SEGUNDO = 40

export default function Footer() {
  const trilhoRef = useRef<HTMLDivElement>(null)
  const metadeRef = useRef<HTMLDivElement>(null)
  const pausadoRef = useRef(false)

  useEffect(() => {
    const trilho = trilhoRef.current
    const metade = metadeRef.current
    if (!trilho || !metade) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let posicao = 0
    let largura = metade.getBoundingClientRect().width
    let quadroAnterior: number | null = null
    let quadro = requestAnimationFrame(animar)

    function medirLargura() {
      largura = metade!.getBoundingClientRect().width
    }

    function animar(tempo: number) {
      if (quadroAnterior !== null && !pausadoRef.current) {
        const segundosPassados = (tempo - quadroAnterior) / 1000
        posicao -= VELOCIDADE_PX_POR_SEGUNDO * segundosPassados

        // ao completar exatamente uma "metade" da esteira, volta pro início:
        // como as duas metades são idênticas, não dá pra perceber a volta
        if (largura > 0 && posicao <= -largura) {
          posicao += largura
        }

        trilho!.style.transform = `translateX(${posicao}px)`
      }

      quadroAnterior = tempo
      quadro = requestAnimationFrame(animar)
    }

    window.addEventListener('resize', medirLargura)

    return () => {
      cancelAnimationFrame(quadro)
      window.removeEventListener('resize', medirLargura)
    }
  }, [])

  return (
    <footer
      className="footer"
      onMouseEnter={() => { pausadoRef.current = true }}
      onMouseLeave={() => { pausadoRef.current = false }}
    >
      <div className="footer-esteira" ref={trilhoRef}>
        {/* a lista se repete 2x: enquanto a 1ª sai andando, a 2ª idêntica ocupa o lugar dela */}
        <div className="footer-links" ref={metadeRef}>
          {itens.map((item) => (
            <LinhaeImagem key={item.rotulo} {...item} />
          ))}
        </div>
        <div className="footer-links" aria-hidden="true">
          {itens.map((item) => (
            <LinhaeImagem key={item.rotulo} {...item} />
          ))}
        </div>
      </div>
    </footer>
  );
}