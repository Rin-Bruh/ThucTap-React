import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1); 
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <div className="counter-container">
      <button className="counter-btn" onClick={handleDecrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
