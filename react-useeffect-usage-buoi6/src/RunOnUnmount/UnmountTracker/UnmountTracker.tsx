import React, { useEffect } from 'react';
import './UnmountTracker.css';

function UnmountTracker() {
  useEffect(() => {
    return () => {
      console.log('Component unmounted!');
    };
  }, []);

  return (
    <div className="unmount-tracker-box">
      <h2>UnmountTracker</h2>
      <p>Open console and toggle me.</p>
    </div>
  );
}

export default UnmountTracker;
