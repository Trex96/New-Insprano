'use client'

import { useState } from 'react'
import Spline from '@splinetool/react-spline'

export function SplineSceneBasic() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleSplineLoad = () => {
    setLoading(false)
  }

  const handleSplineError = () => {
    setError(true)
    setLoading(false)
  }

  return (
    <div className="w-full h-full relative">
      {/* Loading State */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-white/70 text-sm">Loading 3D Scene...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
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
      )}

      {/* Spline Scene */}
      <Spline 
        className="w-full h-full"
        scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
        onLoad={handleSplineLoad}
        onError={handleSplineError}
      />
    </div>
  )
} 