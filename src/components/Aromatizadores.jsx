import ProductCard from './ProductCard'
import { aromatizadores } from '../data/aromatizadores'
import './Aromatizadores.css'

function Aromatizadores() {
  return (
    <section className="aromatizadores-section">
      <div className="container">
        <h2 className="section-title">Aromatizadores de Ambiente</h2>
        <p className="section-subtitle">Difusores y aromatizadores para mantener tu espacio siempre perfumado</p>

        <div className="products-grid">
          {aromatizadores.map(aromatizador => (
            <ProductCard key={aromatizador.id} producto={aromatizador} tipo="aromatizador" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aromatizadores

