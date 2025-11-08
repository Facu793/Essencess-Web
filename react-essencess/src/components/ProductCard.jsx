import './ProductCard.css'

function ProductCard({ vela }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={vela.imagen} 
          alt={vela.nombre}
          className="product-image"
          loading="lazy"
        />
        <span className="product-category">{vela.categoria}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{vela.nombre}</h3>
        <p className="product-description">{vela.descripcion}</p>
        <div className="product-footer">
          <span className="product-price">${vela.precio.toFixed(2)}</span>
          <button className="btn-add-cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

