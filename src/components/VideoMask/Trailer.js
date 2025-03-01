"use client";
import { useRef, useEffect } from "react";
import styles from "./Trailer.module.css";

export default function Trailer() {
  const container = useRef(null);
  const stickyMask = useRef(null);
  const animationRef = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 80;
  const easing = 0.15;
  let easedScrollProgress = 0;

  const getScrollProgress = () => {
    if (!stickyMask.current || !container.current) return 0;

    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;

    easedScrollProgress += delta * easing;

    return easedScrollProgress;
  };

  const animate = () => {
    if (!stickyMask.current || !container.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 120 + "%";

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop playsInline>
            <source src="/medias/nature (1).mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
