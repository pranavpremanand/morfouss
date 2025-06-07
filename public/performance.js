// Performance optimization script
(function() {
  // Disable animations during page load for better performance
  document.documentElement.classList.add('no-animations');
  
  // Remove the class after the page has loaded
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.documentElement.classList.remove('no-animations');
    }, 300);
  });
  
  // Preload critical images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading images 200px before they appear in viewport
      threshold: 0.01 // Trigger when just 1% of the image is visible
    });
    
    // Observe all images with data-src attribute
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    });
  }
  
  // Defer non-critical resources
  function deferResource(resourceType, url, attributes = {}) {
    setTimeout(() => {
      const element = document.createElement(resourceType);
      Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
      });
      
      if (resourceType === 'link') {
        element.href = url;
      } else if (resourceType === 'script') {
        element.src = url;
      }
      
      document.head.appendChild(element);
    }, 1000); // Delay loading by 1 second
  }
  
  // Defer non-critical CSS
  window.addEventListener('load', () => {
    // Add any non-critical CSS here
    // deferResource('link', '/path/to/non-critical.css', { rel: 'stylesheet' });
    
    // Report performance metrics
    if ('performance' in window && 'getEntriesByType' in performance) {
      setTimeout(() => {
        const paintMetrics = performance.getEntriesByType('paint');
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        
        if (paintMetrics.length > 0) {
          console.log('FCP:', paintMetrics.find(p => p.name === 'first-contentful-paint')?.startTime);
          console.log('LCP:', performance.getEntriesByName('largest-contentful-paint')[0]?.startTime);
        }
        
        if (navigationTiming) {
          console.log('DOM Content Loaded:', navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime);
          console.log('Load Time:', navigationTiming.loadEventEnd - navigationTiming.startTime);
        }
      }, 3000);
    }
  });
  
  // Optimize rendering
  document.addEventListener('DOMContentLoaded', () => {
    // Add content-visibility to offscreen elements
    const offscreenElements = document.querySelectorAll('section:not(:first-child)');
    offscreenElements.forEach(el => {
      el.style.contentVisibility = 'auto';
      el.style.containIntrinsicSize = '0 500px'; // Estimate height
    });
  });
})();