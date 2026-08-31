import './text.css'

interface TextoDigitadoProps{
    texto: string;
}

export default function TextoDigitado({texto}: TextoDigitadoProps){
    return (

        <div className='titulo_centro'>
            
            <h1>{texto}</h1>
        
        </div>
    );
}