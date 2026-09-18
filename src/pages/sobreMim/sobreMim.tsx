import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import './sobreMim.css'

const gostos = ['Backend', 'Java', 'Spring Boot', 'Arquitetura', 'DevOps', 'Docker']
const experiencia = ['SQL', 'LSP', 'Integração', 'Análise de dados']

export default function SobreMim() {
  return (
    <div className="sobre">
      <TextoDigitado texto="Sobre mim" />

      <div className="sobre-grade">
        <section className="sobre-card sobre-card--largo">
          <h2>Quem eu sou</h2>
          <p>
            Sou o João Pedro Santana Mota, tenho 18 anos e gosto de programar e
            de estudar. Meu foco é backend com Java e Spring Boot, e arquitetura
            de software é o assunto que mais me interessa.
          </p>
        </section>

        <section className="sobre-card">
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

        <section className="sobre-card">
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

        <section className="sobre-card sobre-card--largo">
          <h2>Do que eu gosto</h2>
          <div className="sobre-tags">
            {gostos.map((item) => (
              <span className="sobre-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="sobre-card sobre-card--largo">
          <h2>Fora do código</h2>
          <p>Sei nadar e amo a minha namorada, Giovanna</p>
        </section>
      </div>
    </div>
  )
}