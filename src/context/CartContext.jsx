import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (producto, cantidad) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === producto.id && item.tipo === producto.tipo)
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === producto.id && item.tipo === producto.tipo
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      }
      
      return [...prevItems, { ...producto, cantidad, tipo: producto.tipo }]
    })
  }

  const updateQuantity = (id, tipo, cantidad) => {
    if (cantidad <= 0) {
      removeFromCart(id, tipo)
      return
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.tipo === tipo
          ? { ...item, cantidad }
          : item
      )
    )
  }

  const removeFromCart = (id, tipo) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.id === id && item.tipo === tipo))
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // Solo sumar si el precio es un número
      if (typeof item.precio === 'number') {
        return total + (item.precio * item.cantidad)
      }
      return total
    }, 0)
  }

  const getDiscountPercentage = () => {
    const totalItems = getTotalItems()
    if (totalItems >= 30) return 30
    if (totalItems >= 20) return 20
    if (totalItems >= 10) return 10
    return 0
  }

  const getDiscountAmount = () => {
    const subtotal = getTotalPrice()
    const discountPercent = getDiscountPercentage()
    return subtotal * (discountPercent / 100)
  }

  const getTotalWithDiscount = () => {
    const subtotal = getTotalPrice()
    const discount = getDiscountAmount()
    return subtotal - discount
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        getDiscountPercentage,
        getDiscountAmount,
        getTotalWithDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

