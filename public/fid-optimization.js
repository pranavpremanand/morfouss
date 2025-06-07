// First Input Delay (FID) optimization script
(function() {
  // Break up long tasks
  const taskQueue = [];
  let isProcessing = false;
  
  function enqueueTask(task, priority = 0) {
    taskQueue.push({ task, priority });
    taskQueue.sort((a, b) => b.priority - a.priority);
    
    if (!isProcessing) {
      processQueue();
    }
  }
  
  function processQueue() {
    if (taskQueue.length === 0) {
      isProcessing = false;
      return;
    }
    
    isProcessing = true;
    const { task } = taskQueue.shift();
    
    // Use requestIdleCallback if available, otherwise setTimeout
    const scheduleNext = 'requestIdleCallback' in window
      ? window.requestIdleCallback
      : function(cb) { setTimeout(cb, 1); };
    
    // Execute the task
    try {
      task();
    } catch (error) {
      console.error('Error executing task:', error);
    }
    
    // Schedule the next task
    scheduleNext(processQueue);
  }
  
  // Expose the task scheduler to the global scope
  window.enqueueTask = enqueueTask;
  
  // Optimize event handlers
  function optimizeEventHandlers() {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    
    EventTarget.prototype.addEventListener = function(type, listener, options) {
      // For input events, use passive listeners when possible
      if (type === 'touchstart' || type === 'touchmove' || type === 'wheel' || type === 'mousewheel') {
        if (options === undefined || options === false || options === true) {
          options = { passive: true };
        } else if (typeof options === 'object' && options !== null && options.passive === undefined) {
          options.passive = true;
        }
      }
      
      return originalAddEventListener.call(this, type, listener, options);
    };
  }
  
  // Call the optimization function
  optimizeEventHandlers();
  
  // Register to capture FID
  if ('PerformanceObserver' in window) {
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (entry.name === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      }).observe({ type: 'first-input', buffered: true });
    } catch (e) {
      console.error('FID measurement error:', e);
    }
  }
})();