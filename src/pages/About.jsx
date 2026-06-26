import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">About PrimeDrive Motors</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Your premier destination for premium vehicles. We're revolutionizing the car buying experience with cutting-edge technology and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-card rounded-xl p-8 border border-dark-border"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At PrimeDrive Motors, we believe that finding your perfect vehicle should be an exciting and seamless experience. We combine traditional automotive expertise with modern technology to deliver a shopping experience like no other.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-card rounded-xl p-8 border border-dark-border"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be the world's most innovative automotive retailer, setting new standards in customer experience, transparency, and technology integration in the car buying process.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-card rounded-xl p-8 border border-dark-border mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">3D Showroom</h3>
              <p className="text-gray-400 text-sm">Experience vehicles in our immersive 3D showroom from anywhere</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Trusted Quality</h3>
              <p className="text-gray-400 text-sm">Every vehicle undergoes rigorous inspection and certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Fast Service</h3>
              <p className="text-gray-400 text-sm">Quick financing approval and seamless delivery process</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-dark-card to-dark-bg rounded-xl p-8 border border-dark-border"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Founded in 2020, PrimeDrive Motors started with a simple idea: make car buying transparent, enjoyable, and accessible to everyone. What began as a small dealership has grown into a premier automotive destination, serving customers across the nation.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, we continue to innovate with our 3D showroom technology, comprehensive vehicle selection, and commitment to customer satisfaction. Our team of automotive experts is dedicated to helping you find not just a car, but the perfect vehicle for your lifestyle.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
