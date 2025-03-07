'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

// Import images directly
import img1 from '../../assets/img/img1.webp';
import img2 from '../../assets/img/img2.webp';
import img3 from '../../assets/img/img3.webp';
import img5 from '../../assets/img/img5.webp';
import img6 from '../../assets/img/img6.webp';
import img7 from '../../assets/img/img7.webp';
import img8 from '../../assets/img/img8.webp';
import img9 from '../../assets/img/img9.webp';

const images = [
  img1,
  img2,
  img3,
  img5,
  img6,
  img7,
  img8,
  img9,
  img1,
  img2,
  img3,
  img5
];

export default function Gallary() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

const Column = ({images, y}) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
    >
      {
        images.map((src, i) => {
          return (
            <div key={i} className={styles.imageContainer} style={{ aspectRatio: '3/4' }}>
              <Image 
                src={src}
                alt='gallery image'
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
                quality={90}
                style={{ objectFit: 'cover' }}
              />
            </div>
          )
        })
      }
    </motion.div>
  )
}