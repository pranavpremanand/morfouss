import React from 'react';

/**
 * Optimized loading spinner component
 * Uses CSS-only animations for better performance
 */
export const LoadingSpinner = () => {
  return (
    <div 
      aria-label="Loading..." 
      className="spinner-parent" 
      role="status"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999
      }}
    >
      <span 
        className="loader"
        style={{
          width: '48px',
          height: '48px',
          border: '5px solid #FFF',
          borderBottomColor: 'transparent',
          borderRadius: '50%',
          display: 'inline-block',
          boxSizing: 'border-box',
          animation: 'rotation 1s linear infinite'
        }}
      ></span>
    </div>
  );
};
