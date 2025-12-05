import { useCart } from '../context/CartContext'
import './Carrito.css'

function Carrito() {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice, 
    getDiscountPercentage,
    getDiscountAmount,
    getTotalWithDiscount,
    clearCart 
  } = useCart()

  // Función para formatear números con punto como separador de miles
  const formatPrice = (price) => {
    return Math.round(price).toLocaleString('es-AR')
  }

  const handleComprar = () => {
    if (cartItems.length === 0) return

    let mensaje = '¡Hola! Me interesa realizar la siguiente compra:\n'
    
    cartItems.forEach(item => {
      let tipoTexto = 'Producto'
      if (item.tipo === 'vela') tipoTexto = 'Vela'
      else if (item.tipo === 'aromatizador') tipoTexto = 'Aromatizador'
      else if (item.tipo === 'pieza-yeso') tipoTexto = 'Pieza de Yeso'
      else if (item.tipo === 'souvenir') tipoTexto = 'Souvenir'
      
      if (typeof item.precio === 'number') {
        const subtotalItem = item.precio * item.cantidad
        mensaje += `- ${tipoTexto}: ${item.nombre}\n`
        mensaje += `- Cantidad: ${item.cantidad}\n\n`
        mensaje += `Precio unitario: $${formatPrice(item.precio)}\n`
        mensaje += `Subtotal: $${formatPrice(subtotalItem)}\n`
      } else {
        mensaje += `- ${tipoTexto}: ${item.nombre}\n`
        mensaje += `- Cantidad: ${item.cantidad}\n`
        mensaje += `${item.precio}\n\n`
      }
    })

    const subtotal = getTotalPrice()
    const discountPercent = getDiscountPercentage()
    const discount = getDiscountAmount()
    const total = getTotalWithDiscount()


    
    if (discountPercent > 0) {
      mensaje += `Descuento (${discountPercent}%): -$${formatPrice(discount)}\n`
    }
    
    mensaje += `Total: $${formatPrice(total)}`

    const numeroWhatsApp = '543496499924' // Número de WhatsApp (código país + número sin espacios)
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
    
    window.open(url, '_blank')
    clearCart()
  }

  if (cartItems.length === 0) {
    return null
  }

  return (
    <div className="carrito-container">
      <div className="carrito-content">
        <h3 className="carrito-title">Carrito de Compras</h3>
        
        <div className="carrito-items">
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${item.tipo}-${index}`} className="carrito-item">
              <div className="item-info">
                <h4 className="item-name">{item.nombre}</h4>
                <p className="item-tipo">{item.tipo === 'vela' ? 'Vela' : 'Aromatizador'}</p>
                <p className="item-descripcion">{item.descripcion}</p>
              </div>
              
              <div className="item-controls">
                <div className="item-quantity">
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.tipo, item.cantidad - 1)}
                  >
                    -
                  </button>
                  <span className="quantity-value">{item.cantidad}</span>
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item.id, item.tipo, item.cantidad + 1)}
                  >
                    +
                  </button>
                </div>
                
                <div className="item-price">
                  <span className="price-unit">${item.precio.toFixed(2)} c/u</span>
                  <span className="price-total">${(item.precio * item.cantidad).toFixed(2)}</span>
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.tipo)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="carrito-footer">
          <div className="carrito-totals">
            <div className="carrito-subtotal">
              <span className="total-label">Subtotal:</span>
              <span className="total-amount">${getTotalPrice().toFixed(2)}</span>
            </div>
            {getDiscountPercentage() > 0 && (
              <div className="carrito-discount">
                <span className="discount-label">Descuento ({getDiscountPercentage()}%):</span>
                <span className="discount-amount">-${getDiscountAmount().toFixed(2)}</span>
              </div>
            )}
            <div className="carrito-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">${getTotalWithDiscount().toFixed(2)}</span>
            </div>
          </div>
          
          <button className="btn-comprar" onClick={handleComprar}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carrito

