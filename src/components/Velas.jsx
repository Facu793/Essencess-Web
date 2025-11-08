import { useState } from 'react'
import ProductCard from './ProductCard'
import { velas } from '../data/velas'
import './Velas.css'

function Velas() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  
  const categories = ['Todas', ...new Set(velas.map(v => v.categoria))]
  
  const filteredVelas = selectedCategory === 'Todas' 
    ? velas 
    : velas.filter(v => v.categoria === selectedCategory)

  return (
    <section className="velas-section">
      <div className="container">
        <h2 className="section-title">Nuestras Velas</h2>
        <p className="section-subtitle">Descubre nuestra colección de velas aromáticas artesanales</p>
        
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
          {filteredVelas.map(vela => (
            <ProductCard key={vela.id} producto={vela} tipo="vela" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Velas

