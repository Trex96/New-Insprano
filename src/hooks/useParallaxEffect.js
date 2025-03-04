'use client'

import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export default function useParallaxEffect() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return { containerRef, y }
} 