import React from 'react';

const ErrorBoundary = ({ error }) => {
  return (
    <div className="text-center text-red-500">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorBoundary;
