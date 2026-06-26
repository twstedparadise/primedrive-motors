import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    financingInterest: false,
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    console.log('Quote request submitted:', { formData, cart })
    setSubmitted(true)
    clearCart()
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-16 text-center"
      >
        <div className="bg-dark-card rounded-xl p-12 border border-dark-border">
          <svg className="w-20 h-20 text-accent-blue mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-3xl font-bold text-white mb-4">Quote Request Submitted!</h2>
          <p className="text-gray-400 mb-8">
            Thank you for your interest. Our team will contact you within 24 hours to discuss your financing options.
          </p>
          <Link
            to="/catalog"
            className="inline-block px-8 py-3 bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold rounded-lg transition-colors"
          >
            Browse More Vehicles
          </Link>
        </div>
      </motion.div>
    )
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
        <h1 className="text-4xl font-bold text-white mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-gray-400 text-lg mb-4">Your cart is empty</p>
            <Link
              to="/catalog"
              className="inline-block px-6 py-3 bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold rounded-lg transition-colors"
            >
              Browse Vehicles
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
                <div className="divide-y divide-dark-border">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 flex items-center gap-4"
                    >
                      <img
                        src={item.thumbnail}
                        alt={`${item.brand} ${item.model}`}
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{item.brand} {item.model}</h3>
                        <p className="text-gray-400 text-sm">{item.year} • {item.fuelType}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">${item.price.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-accent-red transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={clearCart}
                  className="text-gray-400 hover:text-accent-red text-sm transition-colors"
                >
                  Clear Cart
                </button>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Total</p>
                  <p className="text-2xl font-bold text-white">${cartTotal.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Quote Request Form */}
            <div>
              <div className="bg-dark-card rounded-xl p-6 border border-dark-border sticky top-20">
                <h2 className="text-xl font-bold text-white mb-6">Request Financing Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Preferred Contact Method</label>
                    <select
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="financingInterest"
                      id="financing"
                      checked={formData.financingInterest}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded border-dark-border bg-dark-bg text-accent-blue focus:ring-accent-blue"
                    />
                    <label htmlFor="financing" className="text-gray-400 text-sm">
                      I'm interested in financing options
                    </label>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Additional Notes</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold rounded-lg transition-colors"
                  >
                    Submit Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Cart
