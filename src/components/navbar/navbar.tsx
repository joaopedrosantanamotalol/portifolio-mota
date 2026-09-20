import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fecharMenu = () => setMenuOpen(false);
  const classeLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? "ativo" : "";

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mota</div>

      <button
        className="navbar-menu"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end className={classeLink} onClick={fecharMenu}>Início</NavLink>
        <NavLink to="/sobre-mim" className={classeLink} onClick={fecharMenu}>Sobre</NavLink>
        <NavLink to="/projetos" className={classeLink} onClick={fecharMenu}>Projetos</NavLink>
        <a href="#contato" onClick={fecharMenu}>Contato</a>
      </div>
    </nav>
  );
}