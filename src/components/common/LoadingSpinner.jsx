import React from 'react';

/**
 * Simple loading spinner component
 */
export const LoadingSpinner = () => {
  return (
    <div aria-label="Loading..." className="spinner-parent" role="status">
      <span className="loader"></span>
    </div>
  );
};
