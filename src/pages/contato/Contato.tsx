import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import './Contato.css'

const canais = [
  {
    rotulo: 'Email',
    valor: 'Joaopedromotati@gmail.com',
    href: 'mailto:Joaopedromotati@gmail.com',
    acao: 'Enviar email',
  },
  {
    rotulo: 'LinkedIn',
    valor: 'joao-motati',
    href: 'https://linkedin.com/in/joao-motati',
    acao: 'Ver perfil',
  },
  {
    rotulo: 'GitHub',
    valor: 'joaopedrosantanamotalol',
    href: 'https://github.com/joaopedrosantanamotalol',
    acao: 'Ver repositórios',
  },
]

export default function Contato() {
  return (
    <div id="contato" className="contato">
      <TextoDigitado texto="Vamos conversar" />

      <p className="contato-intro">
        Aberto a oportunidades, projetos e trocas sobre desenvolvimento. Escolha o canal que preferir.
      </p>

      <div className="contato-canais">
        {canais.map((canal) => (
          <a
            className="contato-card"
            key={canal.rotulo}
            href={canal.href}
            target={canal.href.startsWith('http') ? '_blank' : undefined}
            rel={canal.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            <span className="contato-rotulo">{canal.rotulo}</span>
            <span className="contato-valor">{canal.valor}</span>
            <span className="contato-acao">{canal.acao} →</span>
          </a>
        ))}
      </div>
    </div>
  )
}