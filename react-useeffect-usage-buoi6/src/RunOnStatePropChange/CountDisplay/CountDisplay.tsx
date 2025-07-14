import React, { useState, useEffect } from 'react';
import './CountDisplay.css';

function CountDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      alert(`Count is now ${count}!`);
    }
  }, [count]);

  return (
    <div className="count-display">
      <h2>Counter Feedback</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}

export default CountDisplay;
