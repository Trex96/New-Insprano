'use client';
import { projects } from './Data';
import Card from '../Events/Card';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null);
  const [showCards, setShowCards] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()
    const handleScroll = () => {
      const section = container.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop <= windowHeight * 0.5) {
        document.body.style.backgroundColor = '#000000';
        document.body.style.transition = 'background-color 0.5s ease-in-out';
        // Delay showing cards slightly after background change starts
        setTimeout(() => setShowCards(true), 200);
      } else {
        document.body.style.backgroundColor = '#ffffff';
        setShowCards(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundColor = '#ffffff';
    }
  }, [])

  return (
    <main ref={container} className="relative mt-[50vh] bg-transparent perspective-[1000px]">
      <motion.div
        initial={{ opacity: 0, rotateX: 20, scale: 0.9, z: -1000 }}
        animate={{ 
          opacity: showCards ? 1 : 0,
          rotateX: showCards ? 0 : 20,
          scale: showCards ? 1 : 0.9,
          z: showCards ? 0 : -1000
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          staggerChildren: 0.1
        }}
        className="origin-center"
      >
        {
          projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
          })
        }
      </motion.div>
    </main>
  )
}