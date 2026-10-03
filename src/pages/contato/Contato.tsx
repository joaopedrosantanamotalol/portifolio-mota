import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import './Contato.css'

// posições em % dentro da teia (centro 50,50 — triângulo de 120° entre os nós)
// dx/dy: direção unitária de cada nó até o centro, usada pra "puxar" ele no hover
const canais = [
  {
    rotulo: 'Email',
    valor: 'Joaopedromotati@gmail.com',
    href: 'mailto:Joaopedromotati@gmail.com',
    x: 50,
    y: 14,
    dx: 0,
    dy: 1,
  },
  {
    rotulo: 'LinkedIn',
    valor: 'joao-motati',
    href: 'https://linkedin.com/in/joao-motati',
    x: 18.82,
    y: 68,
    dx: 0.866,
    dy: -0.5,
  },
  {
    rotulo: 'GitHub',
    valor: 'joaopedrosantanamotalol',
    href: 'https://github.com/joaopedrosantanamotalol',
    x: 81.18,
    y: 68,
    dx: -0.866,
    dy: -0.5,
  },
]

export default function Contato() {
  return (
    <div id="contato" className="contato">
      <TextoDigitado texto="Vamos conversar" />

      <p className="contato-intro">
        Aberto a oportunidades, projetos e trocas sobre desenvolvimento. Escolha um fio da teia.
      </p>

      <div className="teia">
        <svg className="teia-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* anéis decorativos, como os fios circulares de uma teia de aranha */}
          <circle className="teia-anel" cx="50" cy="50" r="12" />
          <circle className="teia-anel" cx="50" cy="50" r="24" />
          <circle className="teia-anel" cx="50" cy="50" r="36" />

          {/* um raio de cada nó até o centro */}
          {canais.map((canal, i) => (
            <line
              key={canal.rotulo}
              className="teia-raio"
              x1="50"
              y1="50"
              x2={canal.x}
              y2={canal.y}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}

          <circle className="teia-centro" cx="50" cy="50" r="3.2" />
        </svg>

        {canais.map((canal, i) => (
          <a
            key={canal.rotulo}
            className="teia-no"
            style={{
              left: `${canal.x}%`,
              top: `${canal.y}%`,
              animationDelay: `${0.4 + i * 0.15}s`,
              ['--dx' as string]: canal.dx,
              ['--dy' as string]: canal.dy,
            }}
            href={canal.href}
            target={canal.href.startsWith('http') ? '_blank' : undefined}
            rel={canal.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="teia-no-rotulo">{canal.rotulo}</span>
            <span className="teia-no-valor">{canal.valor}</span>
          </a>
        ))}
      </div>
    </div>
  )
}