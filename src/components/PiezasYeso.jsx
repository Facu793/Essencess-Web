import { useState } from 'react'
import ProductCard from './ProductCard'
import { piezasYeso } from '../data/piezasYeso'
import './PiezasYeso.css'

function PiezasYeso() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  
  const categories = ['Todas', ...new Set(piezasYeso.map(p => p.categoria))]
  
  const filteredPiezas = selectedCategory === 'Todas' 
    ? piezasYeso 
    : piezasYeso.filter(p => p.categoria === selectedCategory)

  return (
    <section className="piezas-yeso-section">
      <div className="container">
        <h2 className="section-title">Piezas de Yeso</h2>
        <p className="section-subtitle">Descubre nuestra colección de piezas de yeso artesanales para decorar tu hogar</p>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredPiezas.map(pieza => (
            <ProductCard key={pieza.id} producto={pieza} tipo="pieza-yeso" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PiezasYeso

