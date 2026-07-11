import { useEffect, useState } from 'react';

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    let frame;

    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  const isMobile = size.width < BREAKPOINTS.md;
  const isTablet = size.width >= BREAKPOINTS.md && size.width < BREAKPOINTS.lg;
  const isDesktop = size.width >= BREAKPOINTS.lg;

  return { ...size, isMobile, isTablet, isDesktop, breakpoints: BREAKPOINTS };
}