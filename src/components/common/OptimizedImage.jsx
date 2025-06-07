import React from 'react';
import useOptimizedImage from '../../utils/useOptimizedImage';

/**
 * OptimizedImage component for better performance
 * @param {Object} props - Component props
 * @param {string} props.src - Image source
 * @param {string} props.alt - Image alt text
 * @param {string} props.className - CSS classes
 * @param {boolean} props.lazy - Whether to lazy load
 * @param {string} props.placeholderColor - Placeholder color
 * @param {Object} props.imgProps - Additional image props
 * @returns {JSX.Element} - Optimized image component
 */
const OptimizedImage = ({ 
  src, 
  alt = "", 
  className = "", 
  lazy = true, 
  placeholderColor = "#121212",
  ...imgProps 
}) => {
  const { imageProps, loaded, error } = useOptimizedImage(
    src,
    alt,
    className,
    lazy,
    placeholderColor
  );

  if (error) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center`}
        style={{ minHeight: '100px' }}
        {...imgProps}
      >
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  return <img {...imageProps} {...imgProps} />;
};

export default React.memo(OptimizedImage);