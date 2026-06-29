import { brands, fuelTypes } from '../data/cars'

const MAX_PRICE = 200000

const FilterSidebar = ({ filters, onFilterChange }) => {
  const handleBrandChange = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand]
    onFilterChange({ ...filters, brands: newBrands })
  }

  const handleFuelTypeChange = (fuelType) => {
    const newFuelTypes = filters.fuelTypes.includes(fuelType)
      ? filters.fuelTypes.filter((f) => f !== fuelType)
      : [...filters.fuelTypes, fuelType]
    onFilterChange({ ...filters, fuelTypes: newFuelTypes })
  }

  const handlePriceChange = (e) => {
    onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) })
  }

  const clearFilters = () => {
    onFilterChange({ brands: [], fuelTypes: [], maxPrice: MAX_PRICE })
  }

  return (
    <div className="bg-dark-card rounded-xl p-6 border border-dark-border sticky top-20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-accent-blue text-sm hover:text-accent-blue/80 transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h4 className="text-gray-300 font-medium mb-3">Brand</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="w-4 h-4 rounded border-dark-border bg-dark-bg text-accent-blue focus:ring-accent-blue focus:ring-offset-0"
              />
              <span className="text-gray-400 text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fuel Type Filter */}
      <div className="mb-6">
        <h4 className="text-gray-300 font-medium mb-3">Fuel Type</h4>
        <div className="space-y-2">
          {fuelTypes.map((fuelType) => (
            <label key={fuelType} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.fuelTypes.includes(fuelType)}
                onChange={() => handleFuelTypeChange(fuelType)}
                className="w-4 h-4 rounded border-dark-border bg-dark-bg text-accent-blue focus:ring-accent-blue focus:ring-offset-0"
              />
              <span className="text-gray-400 text-sm">{fuelType}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="text-gray-300 font-medium mb-3">Max Price</h4>
        <input
          type="range"
          min="20000"
          max="200000"
          step="5000"
          value={filters.maxPrice}
          onChange={handlePriceChange}
          className="w-full h-2 bg-dark-border rounded-lg appearance-none cursor-pointer accent-accent-blue"
        />
        <div className="flex justify-between mt-2">
          <span className="text-gray-400 text-sm">$20k</span>
          <span className="text-accent-blue text-sm font-semibold">
            {filters.maxPrice >= MAX_PRICE ? 'Any price' : `$${filters.maxPrice.toLocaleString()}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
