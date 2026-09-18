import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fecharMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Mota
      </div>

      <button
        className="navbar-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={fecharMenu}>Início</Link>
        <Link to="/sobre-mim" onClick={fecharMenu}>Sobre</Link>
        <Link to="/projetos" onClick={fecharMenu}>Projetos</Link>
        <a href="#contato" onClick={fecharMenu}>Contato</a>
      </div>
    </nav>
  );
}