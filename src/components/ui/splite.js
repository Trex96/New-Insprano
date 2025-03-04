'use client'

import { Suspense, lazy, useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }) {
  const containerRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    // Initial dimensions
    updateDimensions()

    // Update dimensions on resize
    window.addEventListener('resize', updateDimensions)
    
    // Set initialized flag
    setHasInitialized(true)

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const handleSplineLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleSplineError = (error) => {
    console.error('Spline loading error:', error)
    setHasError(true)
    setIsLoaded(false)
  }

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <p className="text-red-400">Failed to load 3D scene</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full ${className || ''}`}
      style={{ 
        minHeight: '300px',
        position: 'relative'
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-white/70 text-sm">Loading 3D Scene...</p>
          </div>
        </div>
      )}
      {hasInitialized && dimensions.width > 0 && dimensions.height > 0 && (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader"></span>
            </div>
          }
        >
          <div 
            className="w-full h-full" 
            style={{ 
              position: 'relative',
              width: dimensions.width,
              height: dimensions.height
            }}
          >
            <Spline
              scene={scene}
              className={className}
              onLoad={handleSplineLoad}
              onError={handleSplineError}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </Suspense>
      )}
    </div>
  )
} 