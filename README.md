# PrimeDrive Motors

A premium car dealership web application built with React, featuring 3D car visualization, shopping cart functionality, and a modern dark-themed UI.

## Features

- **3D Car Visualization**: Interactive 3D car models using Three.js and React Three Fiber
- **Car Catalog**: Browse and filter premium vehicles by brand, price, and specifications
- **Shopping Cart**: Add cars to cart and manage purchases
- **Wishlist**: Save favorite cars for later
- **Brand Pages**: Dedicated pages for each car brand
- **Showroom**: Interactive showroom experience for individual vehicles
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Modern UI**: Dark theme with smooth animations using Framer Motion

## Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 5.1.0
- **Routing**: React Router DOM 6.22.0
- **Styling**: Tailwind CSS 3.4.0
- **3D Graphics**: Three.js 0.160.0, @react-three/fiber 8.15.0, @react-three/drei 9.96.0
- **Animations**: Framer Motion 11.0.0

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/twstedparadise/primedrive-motors.git
cd primedrive-motors
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
primedrive-motors/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # React Context providers (Cart, Wishlist)
│   ├── data/           # Car data and configurations
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind imports
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

This project is organized with the following contributor structure:

- **Contributor 1**: Core Infrastructure & Setup
- **Contributor 2**: State Management & Data
- **Contributor 3**: Layout Components
- **Contributor 4**: UI Components
- **Contributor 5**: 3D Viewer & Pages

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the project maintainers.
