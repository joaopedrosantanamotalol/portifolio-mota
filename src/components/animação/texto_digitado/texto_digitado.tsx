import "./text.css";

interface TextoDigitadoProps {
  texto: string;
}

export default function TextoDigitado({ texto }: TextoDigitadoProps) {

  const velocidade = 0.08;
  const duracao = texto.length * velocidade;

  return (
    <div className="titulo_centro">
      <h1
        style={{
          "--duracao": `${duracao}s`,
        } as React.CSSProperties}
      >
        {texto}
      </h1>
    </div>
  );
}