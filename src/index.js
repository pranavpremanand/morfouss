import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Immediately start rendering the app for better FCP
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Dynamically import non-critical CSS after initial render
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Use requestIdleCallback for better performance
    const loadNonCriticalResources = () => {
      import('react-modern-drawer/dist/index.css');
      import("keen-slider/keen-slider.min.css");
    };
    
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadNonCriticalResources);
    } else {
      setTimeout(loadNonCriticalResources, 1000);
    }
  });
}

// Custom performance measurement
const sendToAnalytics = (metric) => {
  if (metric.name === 'FCP') {
    console.log('First Contentful Paint:', Math.round(metric.value));
  }
  if (metric.name === 'LCP') {
    console.log('Largest Contentful Paint:', Math.round(metric.value));
  }
  if (metric.name === 'CLS') {
    console.log('Cumulative Layout Shift:', metric.value);
  }
  if (metric.name === 'FID') {
    console.log('First Input Delay:', Math.round(metric.value));
  }
};

// Measure and report Core Web Vitals
reportWebVitals(sendToAnalytics);
