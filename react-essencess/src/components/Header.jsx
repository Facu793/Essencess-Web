import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">WebEscences</h1>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

