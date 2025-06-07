// Cumulative Layout Shift (CLS) optimization script
(function() {
  // Set explicit dimensions for images to prevent layout shifts
  function setExplicitDimensions() {
    const images = document.querySelectorAll('img:not([width]):not([height])');
    
    images.forEach(img => {
      // Set default dimensions to prevent layout shifts
      if (!img.hasAttribute('width') && !img.hasAttribute('height')) {
        // For background blur images, set specific dimensions
        if (img.src.includes('blur-left.png') || img.src.includes('blur-right.png')) {
          img.setAttribute('width', '500');
          img.setAttribute('height', '500');
        } else {
          // For other images, set a reasonable aspect ratio
          img.setAttribute('width', '100%');
          img.style.aspectRatio = '16/9';
        }
      }
    });
  }
  
  // Reserve space for web fonts to prevent layout shifts
  function reserveSpaceForFonts() {
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      /* Reserve space for text elements */
      h1, h2, h3, h4, h5, h6, p, span, a, button, input, textarea, select {
        max-height: 999999px; /* Prevent font boosting on mobile */
      }
      
      /* Add font-display: swap to all @font-face rules */
      @font-face {
        font-display: swap !important;
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // Prevent animations until page is fully loaded
  function preventEarlyAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      .no-animations * {
        animation: none !important;
        transition: none !important;
      }
    `;
    
    document.head.appendChild(style);
    document.documentElement.classList.add('no-animations');
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.documentElement.classList.remove('no-animations');
      }, 300);
    });
  }
  
  // Monitor CLS
  function monitorCLS() {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        let clsEntries = [];
        
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          
          entries.forEach(entry => {
            // Only count layout shifts without recent user input
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              clsEntries.push(entry);
              console.log('CLS update:', entry.value, 'Total:', clsValue);
            }
          });
        });
        
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        console.error('CLS monitoring error:', e);
      }
    }
  }
  
  // Execute optimizations
  document.addEventListener('DOMContentLoaded', setExplicitDimensions);
  reserveSpaceForFonts();
  preventEarlyAnimations();
  monitorCLS();
})();