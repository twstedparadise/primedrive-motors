import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-white font-bold text-xl">PrimeDrive Motors</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Your premier destination for premium vehicles. Experience the future of automotive shopping with our immersive 3D showroom and extensive inventory.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-gray-400 hover:text-accent-blue text-sm transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent-blue text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-accent-blue text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Auto Drive</li>
              <li>Car City, CC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@primedrive.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-border mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 PrimeDrive Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
