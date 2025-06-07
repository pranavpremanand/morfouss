import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Dynamically import non-critical CSS
setTimeout(() => {
  import('react-modern-drawer/dist/index.css');
  import("keen-slider/keen-slider.min.css");
}, 100);

// Optimize initial render - remove StrictMode for better performance
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Custom performance measurement
const sendToAnalytics = (metric) => {
  // You can send the metric to your analytics service
  console.log(metric);
};

// Measure and report Core Web Vitals
reportWebVitals(sendToAnalytics);
