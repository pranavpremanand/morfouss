import React, { useState, useEffect } from 'react';

/**
 * LazyImage component for better image loading performance
 * Highly optimized implementation with proper loading attributes and decoding
 */
const LazyImage = ({ src, alt = "", className = "", priority = false, ...props }) => {
  const [imageSrc, setImageSrc] = useState(priority ? src : null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Optimize blur images
  const optimizedSrc = src && src.includes('contact/left.png') 
    ? '/blur-left.png' 
    : src && src.includes('contact/right.png') 
      ? '/blur-right.png' 
      : src;
  
  useEffect(() => {
    // For priority images, load immediately
    if (priority) {
      setImageSrc(optimizedSrc);
      return;
    }
    
    // For non-priority images, use IntersectionObserver if available
    if ('IntersectionObserver' in window && !priority) {
      const imgElement = document.getElementById(`lazy-img-${Math.random().toString(36).substring(2, 9)}`);
      
      if (imgElement) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setImageSrc(optimizedSrc);
                observer.unobserve(entry.target);
              }
            });
          },
          { rootMargin: '200px 0px' }
        );
        
        observer.observe(imgElement);
        return () => {
          if (imgElement) observer.unobserve(imgElement);
        };
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      setImageSrc(optimizedSrc);
    }
  }, [optimizedSrc, priority]);
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  const uniqueId = `lazy-img-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <img 
      id={uniqueId}
      src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='} // Tiny transparent placeholder
      data-src={optimizedSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchpriority={priority ? "high" : "auto"}
      onLoad={handleLoad}
      style={{
        transition: 'opacity 0.3s ease-in-out',
        ...(!isLoaded && !priority ? { filter: 'blur(10px)' } : {})
      }}
      {...props}
    />
  );
};

export default React.memo(LazyImage);