import { useState, useEffect, useLayoutEffect } from 'react';

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(0);

  const resize = () => {
    setBreakpoint(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useLayoutEffect(() => {
    resize();
  }, []);

  return breakpoint;
}
