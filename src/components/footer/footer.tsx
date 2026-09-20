import LinhaeImagem from '../linhaEIcone/linhaeicone';
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <LinhaeImagem
          rotulo="GitHub"
          texto="joaopedrosantanamotalol"
          href="https://github.com/joaopedrosantanamotalol"
        />

        <LinhaeImagem
          rotulo="Email"
          texto="Joaopedromotati@gmail.com"
          href="mailto:Joaopedromotati@gmail.com"
        />

        <LinhaeImagem
          rotulo="LinkedIn"
          texto="joao-motati"
          href="https://linkedin.com/in/joao-motati"
        />
      </div>
    </footer>
  );
}