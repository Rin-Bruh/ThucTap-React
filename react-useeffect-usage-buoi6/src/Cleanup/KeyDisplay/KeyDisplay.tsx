import React, { useEffect, useState } from 'react';
import './KeyDisplay.css';

function KeyDisplay() {
  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKey(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="key-display">
      <h2>Key Press Tracker</h2>
      <p>You pressed: <strong>{key || 'None'}</strong></p>
    </div>
  );
}

export default KeyDisplay;
