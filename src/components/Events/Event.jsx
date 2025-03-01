'use client';
import { projects } from './Data';
import Card from '../Events/Card';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null);
  const [showCards, setShowCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
    smooth: true
  })

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      wheelMultiplier: 0.85, // Reduced for smoother scroll
      touchMultiplier: 1.5,
      lerp: 0.1, // Added linear interpolation
      smooth: true,
      smoothTouch: true,
    });

    const handleScroll = () => {
      const section = container.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const threshold = window.innerHeight * 0.5;
      
      if (rect.top <= threshold) {
        document.body.style.backgroundColor = '#000000';
        setTimeout(() => setShowCards(true), 100);
      } else {
        document.body.style.backgroundColor = '#ffffff';
        setShowCards(false);
      }
    }

    // Debounce scroll handler
    const debouncedScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedScroll);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 800);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', debouncedScroll);
      document.body.style.backgroundColor = '#ffffff';
    }
  }, []);

  if (isLoading) {
    return <div className="loading-spinner" />; // Add your loading component
  }

  return (
    <main ref={container} className="relative mt-[50vh] bg-transparent perspective-[1200px]">
      <motion.div
        initial={{ opacity: 0, rotateX: 10, scale: 0.98 }}
        animate={{ 
          opacity: showCards ? 1 : 0,
          rotateX: showCards ? 0 : 10,
          scale: showCards ? 1 : 0.98,
        }}
        transition={{ 
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // Custom easing
          staggerChildren: 0.06
        }}
        className="origin-center"
      >
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.025); // Reduced scale difference
          return <Card 
            key={`p_${i}`} 
            i={i} 
            {...project} 
            progress={scrollYProgress} 
            range={[i * 0.15, 1]} // Adjusted range for smoother overlap
            targetScale={targetScale}
          />
        })}
      </motion.div>
    </main>
  )
}

const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};