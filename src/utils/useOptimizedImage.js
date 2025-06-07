import { useState, useEffect } from 'react';

/**
 * Custom hook for optimized image loading
 * @param {string} src - The image source
 * @param {string} alt - The image alt text
 * @param {string} className - CSS classes for the image
 * @param {boolean} lazy - Whether to lazy load the image
 * @param {string} placeholderColor - Placeholder color while loading
 * @returns {Object} - The optimized image props
 */
const useOptimizedImage = (src, alt = "", className = "", lazy = true, placeholderColor = "#121212") => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setLoaded(false);
    setError(false);

    // Preload image
    if (!lazy) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, lazy]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  const imageProps = {
    src,
    alt,
    className: `${className} ${loaded ? 'opacity-100' : 'opacity-0'}`,
    loading: lazy ? "lazy" : "eager",
    onLoad: handleLoad,
    onError: handleError,
    style: {
      transition: 'opacity 0.3s ease-in-out',
      backgroundColor: !loaded && !error ? placeholderColor : 'transparent',
    },
  };

  return {
    imageProps,
    loaded,
    error,
  };
};

export default useOptimizedImage;