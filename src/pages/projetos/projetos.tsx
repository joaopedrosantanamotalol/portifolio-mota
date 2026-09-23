import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import { projetos } from '../../data/projetos'
import './projetos.css'

export default function Projetos() {
  return (
    <div className="projetos">
      <TextoDigitado texto="Meus projetos" />

      <div className="projetos-lista">
        {projetos.map((projeto) => {
          const concluido = projeto.status === 'Concluído'

          return (
            <article
              className={`projeto-card${concluido ? ' projeto-card--concluido' : ''}`}
              key={projeto.id}
            >
              <div className="projeto-info">
                <header className="projeto-topo">
                  <h2>{projeto.nome}</h2>
                  {projeto.status && (
                    <span
                      className={`projeto-status${concluido ? ' projeto-status--concluido' : ''}`}
                    >
                      {concluido && <span className="projeto-status-check">✓</span>}
                      {projeto.status}
                    </span>
                  )}
                </header>

                <p className="projeto-resumo">{projeto.resumo}</p>

                <div className="projeto-tags">
                  {projeto.tecnologias.map((tecnologia) => (
                    <span className="projeto-tag" key={tecnologia}>
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
                  Ver no GitHub →
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}