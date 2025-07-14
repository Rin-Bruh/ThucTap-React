import React, { useEffect } from 'react';
import './SessionEnd.css';

function SessionEnd() {
  useEffect(() => {
    return () => {
      console.log('Session ended!');
    };
  }, []);

  return (
    <div className="session-end-box">
      <h2>SessionEnd</h2>
      <p>Logs "Session ended!" when unmounted.</p>
    </div>
  );
}

export default SessionEnd;
