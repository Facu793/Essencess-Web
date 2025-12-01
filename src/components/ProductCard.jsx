import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

function ProductCard({ producto, tipo }) {
  const [cantidad, setCantidad] = useState(1)
  const [isImageOpen, setIsImageOpen] = useState(false)
  const { addToCart } = useCart()

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isImageOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Limpiar al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isImageOpen])

  const handleCloseModal = () => {
    setIsImageOpen(false)
  }

  const handleOpenModal = (e) => {
    e.stopPropagation()
    setIsImageOpen(true)
  }

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

  const modalContent = isImageOpen ? (
    <div className="image-modal" onClick={handleCloseModal}>
      <div className="image-modal-content" onClick={e => e.stopPropagation()}>
        <button 
          className="image-modal-close" 
          onClick={handleCloseModal}
          type="button"
        >
          ×
        </button>
        <img 
          src={producto.imagen} 
          alt={producto.nombre}
          className="image-modal-img"
        />
        <p className="image-modal-title">{producto.nombre}</p>
      </div>
    </div>
  ) : null

  return (
    <>
      <div className="product-card">
        <div 
          className="product-image-container"
          onClick={handleOpenModal}
        >
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
      {isImageOpen && createPortal(modalContent, document.body)}
    </>
  )
}

export default ProductCard
