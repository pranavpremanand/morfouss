import React from 'react';

/**
 * Simple LazyImage component for better image loading performance
 */
const LazyImage = ({ src, alt = "", className = "", priority = false, ...props }) => {
  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
};

export default LazyImage;