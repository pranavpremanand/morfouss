import React from 'react';

/**
 * Simple LazyImage component for better image loading performance
 */
const LazyImage = ({ src, alt = "", className = "", priority = false, ...props }) => {
  // Use optimized blur images if available
  const optimizedSrc = src && src.includes('contact/left.png') 
    ? '/blur-left.png' 
    : src && src.includes('contact/right.png') 
      ? '/blur-right.png' 
      : src;
  
  return (
    <img 
      src={optimizedSrc}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
};

export default LazyImage;