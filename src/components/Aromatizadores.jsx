import { useState } from 'react'
import ProductCard from './ProductCard'
import { aromatizadores } from '../data/aromatizadores'
import './Aromatizadores.css'

function Aromatizadores() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  
  const categories = ['Todas', ...new Set(aromatizadores.map(a => a.categoria))]
  
  const filteredAromatizadores = selectedCategory === 'Todas' 
    ? aromatizadores 
    : aromatizadores.filter(a => a.categoria === selectedCategory)

  return (
    <section className="aromatizadores-section">
      <div className="container">
        <h2 className="section-title">Aromatizadores de Ambiente</h2>
        <p className="section-subtitle">Difusores y aromatizadores para mantener tu espacio siempre perfumado</p>
        
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
          {filteredAromatizadores.map(aromatizador => (
            <ProductCard key={aromatizador.id} producto={aromatizador} tipo="aromatizador" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aromatizadores

