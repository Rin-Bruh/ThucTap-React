import React, { useState } from 'react';
import './DataLoader.css';

const DataLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleCompleteLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleReload = () => {
    setIsLoading(true);
  };

  return (
    <div className="data-loader-card">
      {isLoading ? (
        <>
          <div className="spinner" />
          <p>Loading data...</p>
          <button className="dark-btn" onClick={handleCompleteLoading}>
            Complete Loading
          </button>
        </>
      ) : (
        <>
          <div className="loader-icon green">✅</div>
          <p>Data loaded successfully!</p>
          <button className="light-btn" onClick={handleReload}>
            Reload
          </button>
        </>
      )}
    </div>
  );
};

export default DataLoader;
