import React, { useEffect, useState } from 'react';
import './ColorFlasher.css';

function ColorFlasher() {
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    const colors = ['#f87171', '#facc15', '#4ade80', '#60a5fa', '#c084fc'];
    let index = 0;

    const intervalId = setInterval(() => {
      setBgColor(colors[index % colors.length]);
      index++;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="color-flasher" style={{ backgroundColor: bgColor }}>
      <h2>Color Flasher</h2>
      <p>Background changes every second</p>
    </div>
  );
}

export default ColorFlasher;
