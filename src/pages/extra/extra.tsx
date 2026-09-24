import { useEffect, useRef, useState } from 'react'
import * as XLSX from 'xlsx'
import TextoDigitado from '../../components/animação/texto_digitado/texto_digitado'
import './extra.css'

// coloque o arquivo em public/nome-mota.xlsx (na raiz do projeto, fora de src/)
const URL_PLANILHA = '/nom_mota.xlsx'
const NOME_ABA = 'DADOS'
const PADDING = 6
const VELOCIDADE = 45 // unidades de comprimento por segundo, controla a velocidade do traço

type Celula = string | number | null
type Ponto = [number, number]

interface Serie {
  nome: string
  pontos: Ponto[]
}

interface Grafico {
  series: Serie[]
  viewBox: string
  nota: string | null
}

function montarGrafico(linhas: Celula[][]): Grafico | null {
  const cabecalho = linhas[0]
  if (!cabecalho) return null

  // acha os pares de colunas "<NOME> X" / "<NOME> Y", na ordem em que aparecem
  const pares: { nome: string; colX: number; colY: number }[] = []
  cabecalho.forEach((titulo, i) => {
    if (typeof titulo !== 'string') return
    const limpo = titulo.trim().toUpperCase()
    if (!limpo.endsWith(' X')) return

    const prefixo = limpo.slice(0, -2).trim()
    const colY = cabecalho.findIndex(
      (t) => typeof t === 'string' && t.trim().toUpperCase() === `${prefixo} Y`,
    )
    if (colY !== -1) pares.push({ nome: prefixo, colX: i, colY })
  })

  if (pares.length === 0) return null

  // acha uma célula de texto longa (a "Nota" explicando o traçado), se existir
  let nota: string | null = null
  for (const linha of linhas) {
    for (const celula of linha) {
      if (typeof celula === 'string' && celula.trim().length > 40) {
        nota = celula.trim()
        break
      }
    }
    if (nota) break
  }

  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity

  const series: Serie[] = pares.map(({ nome, colX, colY }) => {
    const pontos: Ponto[] = []

    for (let r = 1; r < linhas.length; r++) {
      const linha = linhas[r] ?? []
      const x = linha[colX]
      const y = linha[colY]

      if (typeof x === 'number' && typeof y === 'number') {
        pontos.push([x, y])
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }

    return { nome, pontos }
  })

  if (!isFinite(minX)) return null

  const largura = maxX - minX + PADDING * 2
  const altura = maxY - minY + PADDING * 2
  const viewBox = `${minX - PADDING} 0 ${largura} ${altura}`

  // inverte Y: no plano cartesiano cresce pra cima, no SVG cresce pra baixo
  const seriesInvertidas = series.map((serie) => ({
    ...serie,
    pontos: serie.pontos.map(([x, y]) => [x, maxY - y + PADDING] as Ponto),
  }))

  return { series: seriesInvertidas, viewBox, nota }
}

export default function Extra() {
  const [grafico, setGrafico] = useState<Grafico | null>(null)
  const [erro, setErro] = useState(false)
  const referencias = useRef<(SVGPolylineElement | null)[]>([])

  useEffect(() => {
    let cancelado = false

    fetch(URL_PLANILHA)
      .then((resposta) => {
        if (!resposta.ok) throw new Error('arquivo não encontrado')
        return resposta.arrayBuffer()
      })
      .then((buffer) => {
        const pasta = XLSX.read(buffer, { type: 'array' })
        const planilha = pasta.Sheets[NOME_ABA] ?? pasta.Sheets[pasta.SheetNames[0]]
        const linhas = XLSX.utils.sheet_to_json(planilha, {
          header: 1,
          blankrows: false,
        }) as Celula[][]

        const montado = montarGrafico(linhas)
        if (!cancelado) montado ? setGrafico(montado) : setErro(true)
      })
      .catch(() => {
        if (!cancelado) setErro(true)
      })

    return () => {
      cancelado = true
    }
  }, [])

  // desenha cada traço em sequência, usando o comprimento real de cada polyline
  useEffect(() => {
    if (!grafico) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let acumulado = 0
    const tempos: number[] = []

    referencias.current.forEach((el) => {
      if (!el) return

      const comprimento = el.getTotalLength()
      el.style.strokeDasharray = `${comprimento}`
      el.style.strokeDashoffset = `${comprimento}`

      tempos.push(acumulado)
      acumulado += comprimento / VELOCIDADE
    })

    const timeouts = referencias.current.map((el, i) => {
      if (!el) return undefined
      return window.setTimeout(() => {
        el.style.transition = `stroke-dashoffset ${el.getTotalLength() / VELOCIDADE}s linear`
        el.style.strokeDashoffset = '0'
      }, tempos[i] * 1000)
    })

    return () => timeouts.forEach((t) => t && window.clearTimeout(t))
  }, [grafico])

  return (
    <div className="extra">
      <TextoDigitado texto="Extra: o gráfico da planilha" />

      <p className="extra-intro">
        Trabalho de vetores e coordenadas no plano cartesiano: a planilha guarda os pontos,
        e o gráfico abaixo é montado ao vivo a partir dela.
      </p>

      {erro && (
        <p className="extra-aviso">
          Não consegui abrir a planilha. Confira se o arquivo está em{' '}
          <code>public/nome-mota.xlsx</code>.
        </p>
      )}

      {!erro && !grafico && <p className="extra-aviso">Abrindo planilha...</p>}

      {grafico && (
        <>
          <div className="extra-card">
            <svg
              className="extra-svg"
              viewBox={grafico.viewBox}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Gráfico da planilha, desenhando o nome a partir dos pontos"
            >
              {grafico.series.map((serie, i) => (
                <polyline
                  key={serie.nome}
                  ref={(el) => {
                    referencias.current[i] = el
                  }}
                  points={serie.pontos.map(([x, y]) => `${x},${y}`).join(' ')}
                  className="extra-traco"
                />
              ))}
            </svg>
          </div>

          {grafico.nota && <p className="extra-nota">{grafico.nota}</p>}
        </>
      )}

      <a className="extra-download" href={URL_PLANILHA} download>
        Baixar planilha original (.xlsx) →
      </a>
    </div>
  )
}