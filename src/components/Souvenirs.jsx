import { useState } from 'react'
import ProductCard from './ProductCard'
import { souvenirs } from '../data/souvenirs'
import './Souvenirs.css'

function Souvenirs() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  
  const categories = ['Todas', ...new Set(souvenirs.map(s => s.categoria))]
  
  const filteredSouvenirs = selectedCategory === 'Todas' 
    ? souvenirs 
    : souvenirs.filter(s => s.categoria === selectedCategory)

  return (
    <section className="souvenirs-section">
      <div className="container">
        <h2 className="section-title">Souvenirs</h2>
        <p className="section-subtitle">Encuentra el souvenir perfecto para cualquier ocasión especial</p>
        
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
          {filteredSouvenirs.map(souvenir => (
            <ProductCard key={souvenir.id} producto={souvenir} tipo="souvenir" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Souvenirs

