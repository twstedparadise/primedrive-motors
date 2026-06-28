import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cars } from '../data/cars'
import CarCard from '../components/CarCard'

const BrandPage = () => {
  const { brandName } = useParams()
  
  // Convert URL-friendly brand name back to original format
  const brand = brandName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  const brandCars = cars.filter(car => car.brand === brand)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Header */}
        <div className="mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-r from-dark-card to-dark-bg rounded-2xl p-8 border border-dark-border"
          >
            <h1 className="text-4xl font-bold text-white mb-2">{brand}</h1>
            <p className="text-gray-400">
              {brandCars.length} vehicles available
            </p>
          </motion.div>
        </div>

        {/* Car Grid */}
        {brandCars.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400 text-lg">No vehicles found for this brand</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {brandCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default BrandPage
