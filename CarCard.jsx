import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { motion } from 'framer-motion'

const CarCard = ({ car }) => {
  const { addToCart } = useCart()
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()
  const inWishlist = isInWishlist(car.id)

  const handleWishlistToggle = (e) => {
    e.preventDefault()
    if (inWishlist) {
      removeFromWishlist(car.id)
    } else {
      addToWishlist(car)
    }
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(car)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/car/${car.id}`} className="block">
        <div className="bg-dark-card rounded-xl overflow-hidden border border-dark-border hover:border-accent-blue transition-all duration-300 group">
          <div className="relative overflow-hidden">
            <img
              src={car.thumbnail}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <button
              onClick={handleWishlistToggle}
              className="absolute top-3 right-3 p-2 bg-dark-card/80 backdrop-blur-sm rounded-full hover:bg-dark-card transition-colors"
            >
              <svg
                className={`w-5 h-5 ${inWishlist ? 'fill-accent-red text-accent-red' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-3 bg-accent-blue text-white text-xs font-semibold px-2 py-1 rounded">
              {car.fuelType}
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-accent-blue text-sm font-semibold">{car.brand}</span>
              <span className="text-gray-400 text-xs">{car.year}</span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{car.model}</h3>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <span>{car.horsepower} hp</span>
                <span>•</span>
                <span>{car.transmission}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-white font-bold text-xl">${car.price.toLocaleString()}</span>
                <span className="text-gray-400 text-xs ml-1">USD</span>
              </div>
              <button
                onClick={handleAddToCart}
                className="p-2 bg-accent-blue hover:bg-accent-blue/80 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CarCard
