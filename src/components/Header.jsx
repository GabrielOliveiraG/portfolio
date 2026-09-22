import { NavLink, Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>

      <Link to="/" className="logo" aria-label="Front-end Dev">
        <img src="images/logo.svg" />
      </Link>

      <div className="header__social">
        <a href="https://www.linkedin.com/in/gabriel-oliveira-g/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/GabrielOliveiraG" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
      </div>
    </header>
  )
}
