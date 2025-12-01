import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ producto, tipo }) {
  const [cantidad, setCantidad] = useState(1)
  const { addToCart } = useCart()

  const handleIncrement = () => {
    setCantidad(prev => prev + 1)
  }

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(prev => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart({ ...producto, tipo }, cantidad)
    setCantidad(1) // Resetear contador después de agregar
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={producto.imagen} 
          alt={producto.nombre}
          className="product-image"
          loading="lazy"
        />
        <span className="product-category">{producto.categoria}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{producto.nombre}</h3>
        <p className="product-description">{producto.descripcion}</p>
        <div className="product-counter">
          <button 
            className="counter-btn" 
            onClick={handleDecrement}
            disabled={cantidad <= 1}
          >
            -
          </button>
          <span className="counter-value">{cantidad}</span>
          <button 
            className="counter-btn" 
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <div className="product-footer">
          <span className="product-price">
            {typeof producto.precio === 'number'
              ? `$${producto.precio.toFixed(2)}`
              : producto.precio}
          </span>
          <button className="btn-add-cart" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
