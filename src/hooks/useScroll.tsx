import { useState, useEffect } from 'react';

export const useScroll = (element: HTMLElement | Window | null) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (element instanceof HTMLElement) {
        setIsScrolling(element.scrollTop > 0);
      } else if (element instanceof Window) {
        setIsScrolling(element.pageYOffset > 0);
      }
    };

    element?.addEventListener('scroll', handleScroll);

    return () => {
      element?.removeEventListener('scroll', handleScroll);
    };
  }, [element]);

  return isScrolling;
};