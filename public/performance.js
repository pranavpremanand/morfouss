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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        }
      });
    });
    
    // Observe all images with data-src attribute
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('img[data-src]').forEach(img => {
        observer.observe(img);
      });
    });
  }
})();