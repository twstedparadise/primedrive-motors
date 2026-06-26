import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

const Navbar = () => {
  const location = useLocation()
  const { cartCount } = useCart()
  const { wishlistCount } = useWishlist()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-dark-card border-b border-dark-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-white font-bold text-xl">PrimeDrive</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-accent-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className={`text-sm font-medium transition-colors ${
                isActive('/catalog') ? 'text-accent-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              Catalog
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-accent-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-accent-blue' : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/wishlist"
              className="relative p-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="relative p-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-blue text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden border-t border-dark-border">
        <div className="px-4 py-2 space-y-1">
          <Link
            to="/"
            className={`block px-3 py-2 text-sm font-medium rounded-md ${
              isActive('/') ? 'bg-accent-blue text-white' : 'text-gray-300 hover:bg-dark-border'
            }`}
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className={`block px-3 py-2 text-sm font-medium rounded-md ${
              isActive('/catalog') ? 'bg-accent-blue text-white' : 'text-gray-300 hover:bg-dark-border'
            }`}
          >
            Catalog
          </Link>
          <Link
            to="/about"
            className={`block px-3 py-2 text-sm font-medium rounded-md ${
              isActive('/about') ? 'bg-accent-blue text-white' : 'text-gray-300 hover:bg-dark-border'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block px-3 py-2 text-sm font-medium rounded-md ${
              isActive('/contact') ? 'bg-accent-blue text-white' : 'text-gray-300 hover:bg-dark-border'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
