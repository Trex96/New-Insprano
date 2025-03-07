'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Card = ({i, title, description, src, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateBackgroundColor = () => {
      if (!container.current) return;
      
      const rect = container.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.5;
      
      if (isVisible !== isInView) {
        setIsInView(isVisible);
        if (typeof document !== 'undefined') {
          document.body.style.transition = 'background-color 1.2s cubic-bezier(0.33, 1, 0.68, 1)';
          document.body.style.backgroundColor = isVisible ? '#151515' : '#ffffff';
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateBackgroundColor);
      updateBackgroundColor();
      return () => window.removeEventListener('scroll', updateBackgroundColor);
    }
  }, [isInView]);

  const topOffset = isMobile ? `calc(-5vh + ${i * 12}px)` : `calc(-5vh + ${i * 20}px)`;
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{
          scale,
          top: topOffset,
        }} 
        initial={{ 
          opacity: 0,
          y: 100,
          rotateX: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.95)'
        }}
        animate={{ 
          opacity: 1,
          y: 0,
          rotateX: 0,
          backgroundColor: color,
          transition: {
            duration: 1,
            delay: i * 0.15,
            ease: [0.33, 1, 0.68, 1]
          }
        }}
        className={styles.card}
        whileHover={{ 
          y: isMobile ? -2 : -3,
          scale: 1.008,
          transition: { 
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1]
          }
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: i * 0.15 + 0.3,
              ease: [0.33, 1, 0.68, 1]
            }
          }}
        >{title}</motion.h2>
        <div className={styles.body}>
          <motion.div 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: i * 0.15 + 0.4,
                ease: [0.33, 1, 0.68, 1]
              }
            }}
          >
            <p>{description}</p>
          </motion.div>

          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 1,
                delay: i * 0.15 + 0.5,
                ease: [0.33, 1, 0.68, 1]
              }
            }}
          >
            <motion.div
              ref={imageRef}
              className={styles.inner}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src}
                alt={title}
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={90}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card