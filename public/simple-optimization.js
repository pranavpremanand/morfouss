// Simple performance optimization script
(function() {
  // Preload critical images
  const preloadImage = (src) => {
    const img = new Image();
    img.src = src;
  };
  
  // Preload blur images
  preloadImage('/blur-left.png');
  preloadImage('/blur-right.png');
  
  // Disable animations on mobile
  if (window.innerWidth < 768) {
    document.documentElement.classList.add('no-animations');
  }
})();