'use client'

import { useState, useEffect } from 'react'

// Create a global state object to persist animation states in memory
const globalAnimationState = typeof window !== 'undefined' ? window.__animationState || {} : {}
if (typeof window !== 'undefined') {
  window.__animationState = globalAnimationState
}

export default function useAnimationState(key) {
  const [hasAnimated, setHasAnimated] = useState(() => {
    // Check memory first, then localStorage
    if (globalAnimationState[key]) return true
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(key)
      if (stored) {
        globalAnimationState[key] = true
        return true
      }
    }
    return false
  })

  useEffect(() => {
    if (!hasAnimated) {
      // Store in both memory and localStorage
      globalAnimationState[key] = true
      localStorage.setItem(key, 'true')
      setHasAnimated(true)
    }
  }, [key, hasAnimated])

  return { hasAnimated }
} 