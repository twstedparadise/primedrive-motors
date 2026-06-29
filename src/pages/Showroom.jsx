import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cars } from '../data/cars'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import ThreeDViewer from '../components/ThreeDViewer'
import SpecTable from '../components/SpecTable'
import Gallery from '../components/Gallery'

const Showroom = () => {
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
        <Link to={`/car/${car.id}`} className="text-gray-400 hover:text-accent-blue mb-6 inline-block">
          ← Back to Details
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            {car.brand} {car.model}
          </h1>
          <p className="text-gray-400">Virtual Showroom</p>
        </motion.div>

        {/* 3D Viewer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <ThreeDViewer modelPath={car.model3d} carName={`${car.brand} ${car.model}`} images={car.gallery} />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <button
            onClick={handleAddToCart}
            className="flex-1 min-w-[200px] px-6 py-3 bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold rounded-lg transition-colors"
          >
            Get Financing Quote
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
          <button className="flex-1 min-w-[200px] px-6 py-3 bg-dark-card hover:bg-dark-border text-white font-semibold rounded-lg border border-dark-border transition-colors">
            Request Test Drive
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Specifications */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <SpecTable car={car} />
          </motion.div>

          {/* Description and Features */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-dark-card rounded-xl p-6 border border-dark-border mb-6">
              <h3 className="text-white font-semibold text-lg mb-4">Description</h3>
              <p className="text-gray-300 leading-relaxed">{car.description}</p>
            </div>

            <div className="bg-dark-card rounded-xl p-6 border border-dark-border">
              <h3 className="text-white font-semibold text-lg mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-accent-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="bg-dark-card rounded-xl p-6 border border-dark-border">
            <h3 className="text-white font-semibold text-lg mb-4">Photo Gallery</h3>
            <Gallery images={car.gallery} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Showroom
