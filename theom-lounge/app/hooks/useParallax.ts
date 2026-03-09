'use client';

import { useEffect, useRef } from 'react';

/**
 * Hook custom để tạo parallax effect
 * Cách hoạt động: khi scroll, background moves slower (50% scroll speed)
 */
export function useParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Chỉ enable parallax trên desktop (>= 768px)
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    if (!mediaQuery.matches) return; // Skip mobile

    let animationFrameId: number;

    const handleScroll = () => {
      if (!element) return;

      // Get element position relative to viewport
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const windowHeight = window.innerHeight;

      // Chỉ apply parallax khi element visible trên screen
      if (elementTop > windowHeight || elementTop + rect.height < 0) return;

      // Tính parallax offset
      // Khi scroll xuống, background moves slower (50% speed)
      const scrolled = window.scrollY;
      const elementScrollTop = element.offsetTop;
      const distance = scrolled - elementScrollTop;

      // Apply parallax transform
      const offset = distance * 0.5;
      element.style.backgroundPosition = `center ${-offset}px`;
    };

    // Use requestAnimationFrame for smooth animation
    const rafScroll = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(rafScroll);
    };

    // Start parallax
    animationFrameId = requestAnimationFrame(rafScroll);

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return ref;
}