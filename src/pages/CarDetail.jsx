import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cars } from '../data/cars'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import SpecTable from '../components/SpecTable'

const CarDetail = () => {
  const { id } = useParams()
  const car = cars.find(c => c.id === parseInt(id))
  const { addToCart } = useCart()
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()
  const inWishlist = isInWishlist(car?.id)

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl text-gray-400">Vehicle not found</h1>
        <Link to="/catalog" className="text-accent-blue hover:underline mt-4 inline-block">
          Return to Catalog
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(car)
  }

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(car.id)
    } else {
      addToWishlist(car)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/catalog" className="text-gray-400 hover:text-accent-blue mb-6 inline-block">
          ← Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-dark-card rounded-xl overflow-hidden border border-dark-border">
              <img
                src={car.thumbnail}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-dark-card rounded-xl p-6 border border-dark-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent-blue font-semibold">{car.brand}</span>
                <span className="text-gray-400">{car.year}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-2">{car.model}</h1>
              <p className="text-gray-400 mb-6">{car.description}</p>

              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">${car.price.toLocaleString()}</span>
                <span className="text-gray-400 ml-2">USD</span>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-dark-bg rounded-lg p-3 text-center">
                  <div className="text-accent-blue font-bold text-lg">{car.horsepower}</div>
                  <div className="text-gray-400 text-xs">Horsepower</div>
                </div>
                <div className="bg-dark-bg rounded-lg p-3 text-center">
                  <div className="text-accent-blue font-bold text-lg">{car.topSpeed}</div>
                  <div className="text-gray-400 text-xs">Top Speed</div>
                </div>
                <div className="bg-dark-bg rounded-lg p-3 text-center">
                  <div className="text-accent-blue font-bold text-lg">{car.seats}</div>
                  <div className="text-gray-400 text-xs">Seats</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-6 py-3 bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold rounded-lg transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlistToggle}
                  className={`px-6 py-3 font-semibold rounded-lg transition-colors ${
                    inWishlist
                      ? 'bg-accent-red hover:bg-accent-red/80 text-white'
                      : 'bg-dark-card hover:bg-dark-border text-white border border-dark-border'
                  }`}
                >
                  {inWishlist ? '♥ Saved' : '♡ Save'}
                </button>
              </div>

              <Link
                to={`/showroom/${car.id}`}
                className="block w-full px-6 py-3 bg-dark-card hover:bg-dark-border text-white font-semibold rounded-lg border border-dark-border text-center transition-colors"
              >
                View in 3D Showroom →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Full Specifications */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <SpecTable car={car} />
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-dark-card rounded-xl p-6 border border-dark-border">
            <h3 className="text-white font-semibold text-lg mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CarDetail
