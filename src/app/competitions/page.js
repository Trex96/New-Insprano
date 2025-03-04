'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useScrollStyles } from '@/hooks/useScrollStyles'
import useParallaxEffect from '@/hooks/useParallaxEffect'
import ErrorBoundary from '@/components/ErrorBoundary'
import Loading from '@/components/Loading'

// Lazy load heavy components for better initial page load
const SplineSceneBasic = lazy(() => 
  import('@/components/ui/code.demo.js')
    .then(mod => ({ default: mod.SplineSceneBasic }))
)
const GlowingEffectDemo = lazy(() => 
  import('@/components/ui/GlowingEffect')
    .then(mod => ({ default: mod.GlowingEffectDemo }))
)
const LampDemo = lazy(() => 
  import('@/components/ui/code.lamp')
    .then(mod => ({ default: mod.LampDemo }))
)

// Separate components for better organization and reusability
const Background = () => (
  <div className="fixed inset-0 -z-10" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#151515] to-[#151515]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
    <div 
      className="absolute inset-0" 
      style={{ 
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} 
    />
  </div>
)

// Component for each section to improve readability and maintainability
const Section = ({ children, className = '', fallbackMessage }) => {
  return (
    <ErrorBoundary fallback={<div className="text-white">{fallbackMessage}</div>}>
      <Suspense fallback={<Loading />}>
        <div className={`w-full max-w-7xl mx-auto ${className}`}>
          {children}
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}

// Main content component with parallax effect
const MainContent = ({ y }) => {
  return (
    <motion.div 
      style={{ y }}
      className="container mx-auto px-4 pt-24"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <Section fallbackMessage="Error loading 3D scene">
        <SplineSceneBasic />
      </Section>

      <Section className="mt-8" fallbackMessage="Error loading glowing effects">
        <GlowingEffectDemo />
      </Section>

      {/* <Section className="mt-16" fallbackMessage="Error loading lamp demo">
        <LampDemo />
      </Section> */}

    </motion.div>
  )
}

// Main page component
export default function CompetitionsPage() {
  const { containerRef, y } = useParallaxEffect()
  useScrollStyles()

  return (
    <>
      <Background />
      
      <main className="relative">
        <section 
          ref={containerRef} 
          className="relative min-h-screen"
          role="main"
          aria-label="Competitions showcase"
        >
          <MainContent y={y} />
        </section>
      </main>
    </>
  )
}
