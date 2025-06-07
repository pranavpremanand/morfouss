import React from 'react';
import useImageOptimization from '../../hooks/useImageOptimization';

/**
 * LazyImage component for better image loading performance
 * Optimized implementation with proper loading attributes and decoding
 */
const LazyImage = ({ src, alt, className, priority = false, ...props }) => {
  const optimizedSrc = useImageOptimization(src, priority);
  
  return (
    <img 
      src={optimizedSrc} 
      alt={alt || ''} 
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchpriority={priority ? "high" : "auto"}
      {...props}
    />
  );
};

export default React.memo(LazyImage);