import ProductCard from './ProductCard'
import { souvenirs } from '../data/souvenirs'
import './Souvenirs.css'

function Souvenirs() {
  return (
    <section className="souvenirs-section">
      <div className="container">
        <h2 className="section-title">Souvenirs</h2>
        <p className="section-subtitle">Encuentra el souvenir perfecto para cualquier ocasión especial</p>

        <div className="products-grid">
          {souvenirs.map(souvenir => (
            <ProductCard key={souvenir.id} producto={souvenir} tipo="souvenir" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Souvenirs

