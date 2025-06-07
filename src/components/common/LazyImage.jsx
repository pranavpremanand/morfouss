import React from 'react';

/**
 * LazyImage component for better image loading performance
 * Simple implementation that doesn't change existing behavior
 */
const LazyImage = ({ src, alt, className, priority = false, ...props }) => {
  return (
    <img 
      src={src} 
      alt={alt || ''} 
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
};

export default LazyImage;