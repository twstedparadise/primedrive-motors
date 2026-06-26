const SpecTable = ({ car }) => {
  const specs = [
    { label: 'Year', value: car.year },
    { label: 'Price', value: `$${car.price.toLocaleString()}` },
    { label: 'Mileage', value: `${car.mileage.toLocaleString()} mi` },
    { label: 'Fuel Type', value: car.fuelType },
    { label: 'Transmission', value: car.transmission },
    { label: 'Engine', value: car.engine },
    { label: 'Horsepower', value: `${car.horsepower} hp` },
    { label: 'Top Speed', value: `${car.topSpeed} mph` },
    { label: 'Seats', value: car.seats },
    { label: 'Color', value: car.color },
  ]

  return (
    <div className="bg-dark-card rounded-xl border border-dark-border overflow-hidden">
      <h3 className="text-white font-semibold text-lg p-4 border-b border-dark-border">
        Specifications
      </h3>
      <div className="divide-y divide-dark-border">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 hover:bg-dark-border/50 transition-colors"
          >
            <span className="text-gray-400 text-sm">{spec.label}</span>
            <span className="text-white font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecTable
