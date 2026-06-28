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
  const [cart, setCart] = useState([])

  const addToCart = (car) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === car.id)
      if (exists) {
        return prevCart
      }
      return [...prevCart, car]
    })
  }

  const removeFromCart = (carId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== carId))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartCount = cart.length
  const cartTotal = cart.reduce((total, car) => total + car.price, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
