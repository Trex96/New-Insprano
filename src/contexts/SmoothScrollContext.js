
import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollContext = createContext({
  lenis: null,
});

export const SmoothScrollProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);
 
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleRouteChange = () => {
      lenis.scrollTo(0, { immediate: true });
    };

    window.history.scrollRestoration = 'manual';
    
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;

    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [lenis]);

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider');
  }
  return context;
};

export const useScrollTo = () => {
  const { lenis } = useSmoothScroll();

  return {
    scrollTo: (target, options = {}) => {
      if (!lenis) return;

      const defaultOptions = {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        immediate: false,
      };

      lenis.scrollTo(target, { ...defaultOptions, ...options });
    },
    stop: () => lenis?.stop(),
    start: () => lenis?.start(),
  };
}; 