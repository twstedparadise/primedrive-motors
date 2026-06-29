import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { cars } from '../data/cars'
import CarCard from '../components/CarCard'
import FilterSidebar from '../components/FilterSidebar'

const Catalog = () => {
  const MAX_PRICE = 200000
  const [filters, setFilters] = useState({
    brands: [],
    fuelTypes: [],
    maxPrice: MAX_PRICE,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('price-asc')

  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter((car) => {
      const matchesBrand = filters.brands.length === 0 || filters.brands.includes(car.brand)
      const matchesFuelType = filters.fuelTypes.length === 0 || filters.fuelTypes.includes(car.fuelType)
      const matchesPrice = car.price <= filters.maxPrice
      const matchesSearch = searchTerm === '' || 
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.year.toString().includes(searchTerm)
      
      return matchesBrand && matchesFuelType && matchesPrice && matchesSearch
    })

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'year-desc':
          return b.year - a.year
        case 'year-asc':
          return a.year - b.year
        case 'horsepower-desc':
          return b.horsepower - a.horsepower
        case 'horsepower-asc':
          return a.horsepower - b.horsepower
        default:
          return 0
      }
    })

    return sorted
  }, [filters, searchTerm, sortBy])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Vehicle Catalog</h1>
          <p className="text-gray-400">
            Browse our extensive inventory of {cars.length} premium vehicles
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by brand, model, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>
          <div className="md:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-blue transition-colors"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Year: Newest</option>
              <option value="year-asc">Year: Oldest</option>
              <option value="horsepower-desc">HP: Highest</option>
              <option value="horsepower-asc">HP: Lowest</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Car Grid */}
          <div className="flex-1">
            <div className="mb-4 text-gray-400">
              Showing {filteredAndSortedCars.length} vehicles
            </div>
            
            {filteredAndSortedCars.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400 text-lg">No vehicles match your criteria</p>
                <button
                  onClick={() => setFilters({ brands: [], fuelTypes: [], maxPrice: MAX_PRICE })}
                  className="mt-4 text-accent-blue hover:text-accent-blue/80"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Catalog
