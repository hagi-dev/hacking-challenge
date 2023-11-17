import { useEffect, useRef, useState } from 'react';

export const useOutsideClick = (initialIsOpen: boolean) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isOpen]);

  return { ref, isOpen, setIsOpen };
};
