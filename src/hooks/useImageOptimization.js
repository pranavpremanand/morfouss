import { useState, useEffect } from 'react';

/**
 * Custom hook for image optimization
 * @param {string} src - Original image source
 * @param {boolean} priority - Whether the image is high priority
 * @returns {string} - Optimized image source
 */
const useImageOptimization = (src, priority = false) => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  
  useEffect(() => {
    // For blur images, use the preloaded versions from public folder
    if (src && src.includes('contact/left.png')) {
      setOptimizedSrc('/blur-left.png');
    } else if (src && src.includes('contact/right.png')) {
      setOptimizedSrc('/blur-right.png');
    } else {
      setOptimizedSrc(src);
    }
    
    // Preload high priority images
    if (priority && src) {
      const img = new Image();
      img.src = src;
    }
  }, [src, priority]);
  
  return optimizedSrc;
};

export default useImageOptimization;