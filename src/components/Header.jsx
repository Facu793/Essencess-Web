import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header({ activeTab, setActiveTab, isCartOpen, onCartToggle }) {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (tab) => {
    setActiveTab(tab)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-main">
          <h1 className="logo">Esscences</h1>

          {/* Navegación de escritorio al mismo nivel que el título */}
          <nav className="nav nav-desktop">
            <button 
              className={`nav-tab ${activeTab === 'inicio' ? 'active' : ''}`}
              onClick={() => handleNavClick('inicio')}
            >
              Inicio
            </button>
            <button 
              className={`nav-tab ${activeTab === 'velas' ? 'active' : ''}`}
              onClick={() => handleNavClick('velas')}
            >
              Velas
            </button>
            <button 
              className={`nav-tab ${activeTab === 'aromatizadores' ? 'active' : ''}`}
              onClick={() => handleNavClick('aromatizadores')}
            >
              Aromatizadores
            </button>
            <button 
              className={`nav-tab ${activeTab === 'piezas-yeso' ? 'active' : ''}`}
              onClick={() => handleNavClick('piezas-yeso')}
            >
              Piezas de Yeso
            </button>
            <button 
              className={`nav-tab ${activeTab === 'souvenirs' ? 'active' : ''}`}
              onClick={() => handleNavClick('souvenirs')}
            >
              Souvenirs
            </button>
            <button 
              className={`nav-tab ${activeTab === 'contacto' ? 'active' : ''}`}
              onClick={() => handleNavClick('contacto')}
            >
              Contacto
            </button>
            <button 
              className={`cart-button cart-button-desktop ${isCartOpen ? 'open' : ''}`}
              onClick={onCartToggle}
              aria-label={isCartOpen ? 'Cerrar carrito' : 'Abrir carrito'}
            >
              <span className="cart-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path 
                    d="M3 4h2l1.2 9h11.6l1.1-7H6.1" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <circle cx="9" cy="19" r="1.3" fill="currentColor" />
                  <circle cx="17" cy="19" r="1.3" fill="currentColor" />
                </svg>
              </span>
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </button>
          </nav>

          <div className="header-right">
            <button 
              className={`cart-button cart-button-mobile ${isCartOpen ? 'open' : ''}`}
              onClick={onCartToggle}
              aria-label={isCartOpen ? 'Cerrar carrito' : 'Abrir carrito'}
            >
              <span className="cart-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path 
                    d="M3 4h2l1.2 9h11.6l1.1-7H6.1" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <circle cx="9" cy="19" r="1.3" fill="currentColor" />
                  <circle cx="17" cy="19" r="1.3" fill="currentColor" />
                </svg>
              </span>
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </button>
            <button
              className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label="Abrir menú de navegación"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Navegación móvil desplegable */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <button 
              className={`nav-tab-mobile ${activeTab === 'inicio' ? 'active' : ''}`}
              onClick={() => handleNavClick('inicio')}
            >
              Inicio
            </button>
            <button 
              className={`nav-tab-mobile ${activeTab === 'velas' ? 'active' : ''}`}
              onClick={() => handleNavClick('velas')}
            >
              Velas
            </button>
            <button 
              className={`nav-tab-mobile ${activeTab === 'aromatizadores' ? 'active' : ''}`}
              onClick={() => handleNavClick('aromatizadores')}
            >
              Aromatizadores
            </button>
            <button 
              className={`nav-tab-mobile ${activeTab === 'piezas-yeso' ? 'active' : ''}`}
              onClick={() => handleNavClick('piezas-yeso')}
            >
              Piezas de Yeso
            </button>
            <button 
              className={`nav-tab-mobile ${activeTab === 'souvenirs' ? 'active' : ''}`}
              onClick={() => handleNavClick('souvenirs')}
            >
              Souvenirs
            </button>
            <button 
              className={`nav-tab-mobile ${activeTab === 'contacto' ? 'active' : ''}`}
              onClick={() => handleNavClick('contacto')}
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
