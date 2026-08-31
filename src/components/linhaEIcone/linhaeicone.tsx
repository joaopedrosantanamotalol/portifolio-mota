import './linhaeicone.css'

interface LinhaeImagemProps{
    imagem?: string;
    alt: string;
    texto: string;
}

export default function LinhaeImagem({imagem,texto,alt}: LinhaeImagemProps){
return (

<div className="linhaeimagem">
<img src={imagem} alt={alt} />
<a href="">{texto}</a>
</div>

);
}