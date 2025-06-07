import React from 'react';

/**
 * LazyImage component for better image loading performance
 * Highly optimized implementation with proper loading attributes and decoding
 */
const LazyImage = ({ src, alt, className, priority = false, ...props }) => {
  return (
    <img 
      id={uniqueId}
      src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='} // Tiny transparent placeholder
      data-src={optimizedSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
};

export default React.memo(LazyImage);