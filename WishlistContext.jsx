import { createContext, useContext, useState } from 'react'

const WishlistContext = createContext()

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([])

  const addToWishlist = (car) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.id === car.id)
      if (exists) {
        return prevWishlist
      }
      return [...prevWishlist, car]
    })
  }

  const removeFromWishlist = (carId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== carId))
  }

  const isInWishlist = (carId) => {
    return wishlist.some((item) => item.id === carId)
  }

  const wishlistCount = wishlist.length

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}
