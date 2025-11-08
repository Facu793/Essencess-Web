import { useCart } from '../context/CartContext'
import './Header.css'

function Header({ activeTab, setActiveTab }) {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">WebEscences</h1>
        <nav className="nav">
          <button 
            className={`nav-tab ${activeTab === 'inicio' ? 'active' : ''}`}
            onClick={() => setActiveTab('inicio')}
          >
            Inicio
          </button>
          <button 
            className={`nav-tab ${activeTab === 'velas' ? 'active' : ''}`}
            onClick={() => setActiveTab('velas')}
          >
            Velas
          </button>
          <button 
            className={`nav-tab ${activeTab === 'aromatizadores' ? 'active' : ''}`}
            onClick={() => setActiveTab('aromatizadores')}
          >
            Aromatizadores
          </button>
          <button 
            className={`nav-tab ${activeTab === 'contacto' ? 'active' : ''}`}
            onClick={() => setActiveTab('contacto')}
          >
            Contacto
          </button>
        </nav>
        {totalItems > 0 && (
          <div className="cart-badge">
            {totalItems}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
