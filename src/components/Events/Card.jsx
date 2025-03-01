'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {
  const container = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
    smooth: true
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]) // Reduced initial scale
  const scale = useTransform(progress, range, [1, targetScale]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const topOffset = isMobile ? `calc(-5vh + ${i * 12}px)` : `calc(-5vh + ${i * 20}px)`;
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{
          backgroundColor: color, 
          scale, 
          top: topOffset,
        }} 
        className={styles.card}
        initial={{ opacity: 0, y: 30, rotateX: 3 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.8,
          delay: i * 0.06,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{ 
          y: isMobile ? -2 : -3,
          scale: 1.008,
          transition: { 
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1]
          }
        }}
      >
        <h2 style={{ 
          color: '#1a1a1a',
          textShadow: 'none',
          letterSpacing: '0.5px'
        }}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p style={{ 
              color: 'rgba(0,0,0,0.85)',
              lineHeight: '1.6'
            }}>{description}</p>
            <span>
              <a href={url} 
                target="_blank" 
                style={{ 
                  color: '#000000',
                  opacity: 0.9,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(0,0,0,0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '1'}
                onMouseLeave={(e) => e.target.style.opacity = '0.9'}
              >
                See more
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" 
                fill="#d6d3d1"/>
              </svg>
            </span>
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              ref={imageRef}
              className={styles.inner}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={`/images/${src}`}
                alt={title}
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={90}
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card