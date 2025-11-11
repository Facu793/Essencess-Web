import ProductCard from './ProductCard'
import { piezasYeso } from '../data/piezasYeso'
import './PiezasYeso.css'

function PiezasYeso() {
  return (
    <section className="piezas-yeso-section">
      <div className="container">
        <h2 className="section-title">Piezas de Yeso</h2>
        <p className="section-subtitle">Descubre nuestra colección de piezas de yeso artesanales para decorar tu hogar</p>

        <div className="products-grid">
          {piezasYeso.map(pieza => (
            <ProductCard key={pieza.id} producto={pieza} tipo="pieza-yeso" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PiezasYeso

