import React, { useState, useEffect } from 'react';

/**
 * LazyImage component for better image loading performance
 * Simple implementation that doesn't change existing behavior
 */
const LazyImage = ({ src, alt, className, priority = false, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // If image is priority, preload it
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [src, priority]);

  return (
    <img 
      src={src} 
      alt={alt || ''} 
      className={className}
      loading={priority ? "eager" : "lazy"}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};

export default LazyImage;