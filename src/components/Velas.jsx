import ProductCard from './ProductCard'
import { velas } from '../data/velas'
import './Velas.css'

function Velas() {
  return (
    <section className="velas-section">
      <div className="container">
        <h2 className="section-title">Nuestras Velas</h2>
        <p className="section-subtitle">Descubre nuestra colección de velas aromáticas artesanales</p>

        <div className="products-grid">
          {velas.map(vela => (
            <ProductCard key={vela.id} producto={vela} tipo="vela" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Velas

