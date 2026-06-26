import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath)
  return <primitive object={scene} />
}

function FallbackModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 1, 4]} />
      <meshStandardMaterial color="#3B82F6" />
    </mesh>
  )
}

const ThreeDViewer = ({ modelPath, carName }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setLoading(false)
  }

  const handleError = () => {
    setLoading(false)
    setError(true)
  }

  return (
    <div className="w-full h-[500px] bg-dark-card rounded-xl overflow-hidden border border-dark-border">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-card z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading 3D model...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-card z-10">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-gray-400 mb-2">3D model not available</p>
            <p className="text-gray-500 text-sm">Showing illustrative preview</p>
          </div>
        </div>
      )}

      <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Environment preset="city" />
          
          {!error ? (
            <Model 
              modelPath={modelPath} 
              onLoad={handleLoad}
              onError={handleError}
            />
          ) : (
            <FallbackModel />
          )}
          
          <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
          
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={15}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-4 bg-dark-card/80 backdrop-blur-sm px-4 py-2 rounded-lg">
        <p className="text-gray-400 text-xs">
          {error ? '3D preview — illustrative model' : 'Drag to rotate • Scroll to zoom'}
        </p>
      </div>
    </div>
  )
}

export default ThreeDViewer
