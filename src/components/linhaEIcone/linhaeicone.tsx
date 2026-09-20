import './linhaeicone.css'

interface LinhaeImagemProps {
  href: string;
  texto: string;
  rotulo?: string;
  imagem?: string;
  alt?: string;
}

export default function LinhaeImagem({ href, texto, rotulo, imagem, alt = '' }: LinhaeImagemProps) {
  const externo = href.startsWith('http');

  return (
    <a
      className="linhaeimagem"
      href={href}
      target={externo ? '_blank' : undefined}
      rel={externo ? 'noopener noreferrer' : undefined}
    >
      {imagem && <img src={imagem} alt={alt} />}
      {rotulo && <span className="linhaeimagem-rotulo">{rotulo}</span>}
      <span className="linhaeimagem-texto">{texto}</span>
    </a>
  );
}