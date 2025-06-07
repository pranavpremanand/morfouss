// Time to Interactive (TTI) optimization script
(function() {
  // Defer non-critical JavaScript
  function deferNonCriticalJS() {
    // Find all script tags without async or defer
    const scripts = document.querySelectorAll('script:not([async]):not([defer])');
    
    scripts.forEach(script => {
      // Skip inline scripts and critical scripts
      if (!script.src || 
          script.src.includes('performance.js') || 
          script.src.includes('fid-optimization.js') || 
          script.src.includes('cls-optimization.js')) {
        return;
      }
      
      // Clone the script and set it to defer
      const deferredScript = document.createElement('script');
      deferredScript.src = script.src;
      deferredScript.defer = true;
      
      // Replace the original script with the deferred one
      script.parentNode.replaceChild(deferredScript, script);
    });
  }
  
  // Optimize event listeners
  function optimizeEventListeners() {
    // Store original methods
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    const originalRemoveEventListener = EventTarget.prototype.removeEventListener;
    
    // Keep track of event listeners
    const eventListeners = new Map();
    
    // Override addEventListener
    EventTarget.prototype.addEventListener = function(type, listener, options) {
      // For scroll and resize events, use passive listeners and throttle
      if (type === 'scroll' || type === 'resize') {
        let throttled = false;
        const throttledListener = function(event) {
          if (!throttled) {
            throttled = true;
            window.requestAnimationFrame(() => {
              listener.call(this, event);
              throttled = false;
            });
          }
        };
        
        // Store the original listener and the throttled one
        if (!eventListeners.has(listener)) {
          eventListeners.set(listener, throttledListener);
        }
        
        // Make the listener passive by default
        const passiveOptions = typeof options === 'object'
          ? { ...options, passive: options.passive !== false }
          : { passive: true };
        
        return originalAddEventListener.call(this, type, throttledListener, passiveOptions);
      }
      
      // For other events, use the original method
      return originalAddEventListener.call(this, type, listener, options);
    };
    
    // Override removeEventListener to handle throttled listeners
    EventTarget.prototype.removeEventListener = function(type, listener, options) {
      // If we have a throttled version of this listener, remove that instead
      const throttledListener = eventListeners.get(listener);
      if (throttledListener) {
        eventListeners.delete(listener);
        return originalRemoveEventListener.call(this, type, throttledListener, options);
      }
      
      // Otherwise, use the original method
      return originalRemoveEventListener.call(this, type, listener, options);
    };
  }
  
  // Optimize third-party scripts
  function optimizeThirdPartyScripts() {
    // Delay loading of non-critical third-party scripts
    window.addEventListener('load', () => {
      setTimeout(() => {
        // Add any third-party scripts here
        // Example: loadScript('https://example.com/analytics.js');
      }, 2000);
    });
  }
  
  // Helper function to load a script
  function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }
  
  // Execute optimizations
  window.addEventListener('DOMContentLoaded', deferNonCriticalJS);
  optimizeEventListeners();
  optimizeThirdPartyScripts();
})();