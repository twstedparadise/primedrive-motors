import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cars, brands } from '../data/cars'
import CarCard from '../components/CarCard'

const Home = () => {
  const featuredCars = cars.slice(0, 6)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Find Your <span className="text-accent-blue">Perfect Drive</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Experience the future of car shopping with our immersive 3D showroom and premium inventory from the world's finest brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/catalog"
                className="px-8 py-4 bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold rounded-lg transition-colors"
              >
                Browse Inventory
              </Link>
              <Link
                to="/catalog"
                className="px-8 py-4 bg-dark-card hover:bg-dark-border text-white font-semibold rounded-lg border border-dark-border transition-colors"
              >
                View 3D Showroom
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Shop by Brand
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/brand/${brand.toLowerCase().replace(' ', '-')}`}
                  className="block bg-dark-card rounded-xl p-6 border border-dark-border hover:border-accent-blue transition-all duration-300 text-center group"
                >
                  <div className="text-2xl font-bold text-gray-400 group-hover:text-accent-blue transition-colors">
                    {brand}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-8"
          >
            <h2 className="text-3xl font-bold text-white">Featured Vehicles</h2>
            <Link
              to="/catalog"
              className="text-accent-blue hover:text-accent-blue/80 font-medium transition-colors"
            >
              View All →
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-blue to-accent-blue/80 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find Your Dream Car?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Browse our extensive inventory, explore vehicles in our 3D showroom, and request a quote today.
            </p>
            <Link
              to="/catalog"
              className="inline-block px-8 py-4 bg-white text-accent-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
