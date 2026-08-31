import LinhaeImagem from '../linhaEIcone/linhaeicone';
import './Footer.css'

import Github from '@/assets/icones/github-light.svg'
import Email from '@/assets/icones/gmail.svg'
import linkedin from '@/assets/icones/linkedin.svg'

export default function footer(){
    return(

        <footer className="footer">
        <div className="footer-links">

        <LinhaeImagem
        imagem={Github}
        alt='imagem github'
        texto='Github'
        />

         <LinhaeImagem
        imagem={Email}
        alt='imagem email'
        texto='Email'
        />

         <LinhaeImagem
        imagem={linkedin}
        alt='imagem linkedin'
        texto='linkedin'
        />

        </div>
        </footer>

    );
}