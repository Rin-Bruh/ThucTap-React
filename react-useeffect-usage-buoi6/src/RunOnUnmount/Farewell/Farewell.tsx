import React, { useEffect } from 'react';
import './Farewell.css';

function Farewell() {
  useEffect(() => {
    return () => {
      alert('Component removed!');
    };
  }, []);

  return (
    <div className="farewell-box">
      <h2>Farewell Component</h2>
      <p>This will alert when unmounted.</p>
    </div>
  );
}

export default Farewell;
