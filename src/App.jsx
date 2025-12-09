import { useMemo, useState } from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './components/Inicio'
import Velas from './components/Velas'
import Aromatizadores from './components/Aromatizadores'
import PiezasYeso from './components/PiezasYeso'
import Souvenirs from './components/Souvenirs'
import Contacto from './components/Contacto'
import Carrito from './components/Carrito'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('inicio')
  const prefersOpenCart = useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.innerWidth > 768
  }, [])
  const [isCartOpen, setIsCartOpen] = useState(prefersOpenCart)

  const toggleCart = () => setIsCartOpen(prev => !prev)

  const renderContent = () => {
    switch(activeTab) {
      case 'inicio':
        return <Inicio />
      case 'velas':
        return <Velas />
      case 'aromatizadores':
        return <Aromatizadores />
      case 'piezas-yeso':
        return <PiezasYeso />
      case 'souvenirs':
        return <Souvenirs />
      case 'contacto':
        return <Contacto />
      default:
        return <Inicio />
    }
  }

  return (
    <CartProvider>
      <div className="App">
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          isCartOpen={isCartOpen}
          onCartToggle={toggleCart}
        />
        <Carrito 
          isOpen={isCartOpen}
          onClose={toggleCart}
        />
        <div className={`main-content ${activeTab === 'inicio' ? 'with-footer' : ''}`}>
          {renderContent()}
        </div>
        {activeTab === 'inicio' && <Footer />}
      </div>
    </CartProvider>
  )
}

export default App
