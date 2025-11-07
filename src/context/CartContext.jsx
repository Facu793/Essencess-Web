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
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0)
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

