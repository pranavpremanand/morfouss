/**
 * Image optimization helper functions
 */

/**
 * Get appropriate image size based on viewport
 * @param {number} originalWidth - Original image width
 * @param {string} screenSize - Screen size (mobile, tablet, desktop)
 * @returns {number} - Optimized width
 */
export const getOptimizedWidth = (originalWidth, screenSize = 'desktop') => {
  const sizeFactor = {
    mobile: 0.95, // 95% of viewport on mobile
    tablet: 0.85, // 85% of viewport on tablet
    desktop: 0.75, // 75% of viewport on desktop
  };

  // Default viewport widths
  const viewportWidth = {
    mobile: 375,
    tablet: 768,
    desktop: 1440,
  };

  // Calculate optimized width
  const factor = sizeFactor[screenSize] || sizeFactor.desktop;
  const maxWidth = viewportWidth[screenSize] || viewportWidth.desktop;
  
  return Math.min(originalWidth, Math.floor(maxWidth * factor));
};

/**
 * Generate srcset for responsive images
 * @param {string} src - Image source
 * @param {Array} widths - Array of widths for srcset
 * @returns {string} - srcset attribute value
 */
export const generateSrcSet = (src, widths = [320, 640, 960, 1280, 1920]) => {
  if (!src) return '';
  
  // For external URLs, we can't generate srcset
  if (src.startsWith('http') || src.startsWith('//')) {
    return '';
  }

  return widths
    .map(width => `${src} ${width}w`)
    .join(', ');
};

/**
 * Generate sizes attribute for responsive images
 * @returns {string} - sizes attribute value
 */
export const generateSizes = () => {
  return '(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 75vw';
};

/**
 * Check if image should be lazy loaded
 * @param {number} index - Image index
 * @param {boolean} isAboveFold - Whether image is above the fold
 * @returns {boolean} - Whether to lazy load
 */
export const shouldLazyLoad = (index, isAboveFold = false) => {
  // Don't lazy load first 2 images or images marked as above the fold
  return index > 1 && !isAboveFold;
};