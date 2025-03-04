'use client'

import { SplineScene } from "@/components/ui/splite.js"
import { Card } from "@/components/ui/card.js"
import { Spotlight } from "@/components/ui/spotlight.js"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react'

export function SplineSceneBasic() {
  const [shouldRender, setShouldRender] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const splineRef = useRef(null)

  useEffect(() => {
    // Check if we've rendered before
    const hasRendered = localStorage.getItem('splineSceneAnimated')
    if (!hasRendered) {
      localStorage.setItem('splineSceneAnimated', 'true')
    } else {
      setHasAnimated(true)
    }
    setShouldRender(true)

    // Prevent re-animations on scroll
    if (splineRef.current) {
      splineRef.current.style.transform = 'none'
      splineRef.current.style.willChange = 'auto'
    }
  }, [])

  if (!shouldRender) {
    return null
  }

  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <motion.div 
          className="flex-1 p-8 relative z-10 px-20 flex flex-col justify-center"
          initial={!hasAnimated ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            ROBOSPARNO
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Experience the future of robotics with cutting-edge machines, AI-driven automation, high-speed innovation, and intense challenges pushing technological boundaries.
          </p>
        </motion.div>

        {/* Right content */}
        <motion.div 
          ref={splineRef}
          className="flex-1 relative"
          initial={!hasAnimated ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut"
          }}
          style={{
            transform: 'none',
            willChange: 'auto'
          }}
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </Card>
  )
} 