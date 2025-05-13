import { useState, useEffect } from 'react';

interface Size {
  x: number;
  y: number;
}

const getCurrentSize = (): Size => ({
  x: window.innerWidth,
  y: window.innerHeight,
});

export const useViewport = () => {
  const [size, setSize] = useState<Size>(getCurrentSize());

  const handleResize = () => {
    setSize(getCurrentSize());
    console.log('handle resize');
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('addEventListener');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('removeEventListener');
    };
  }, []);

  return size;
};

export const foo = 'bar';
