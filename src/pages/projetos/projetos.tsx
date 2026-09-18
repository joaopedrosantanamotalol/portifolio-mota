import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import { projetos } from '../../data/projetos'
import './projetos.css'

export default function Projetos() {
  return (
    <div className="projetos">
      <TextoDigitado texto="Meus projetos" />

      <div className="projetos-lista">
        {projetos.map((projeto) => (
          <article className="projeto-card" key={projeto.id}>
            <header className="projeto-topo">
              <h2>{projeto.nome}</h2>
              {projeto.status && (
                <span className="projeto-status">{projeto.status}</span>
              )}
            </header>

            <p className="projeto-resumo">{projeto.resumo}</p>

            <ul className="projeto-destaques">
              {projeto.destaques.map((destaque) => (
                <li key={destaque}>{destaque}</li>
              ))}
            </ul>

            <div className="projeto-tags">
              {projeto.tecnologias.map((tecnologia) => (
                <span className="projeto-tag" key={tecnologia}>
                  {tecnologia}
                </span>
              ))}
            </div>

            <a className="projeto-link" href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub →
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}