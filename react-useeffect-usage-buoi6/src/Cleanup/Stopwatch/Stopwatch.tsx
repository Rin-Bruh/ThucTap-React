import React, { useEffect, useState } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup khi unmount
    };
  }, []);

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <p>{seconds} second(s)</p>
    </div>
  );
}

export default Stopwatch;
