import React, { useEffect, useState } from 'react';
import './MousePosition.css';

function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMouse);
    return () => {
      window.removeEventListener('mousemove', updateMouse);
    };
  }, []);

  return (
    <div className="mouse-box">
      <h2>Mouse Position</h2>
      <p>X: {position.x}, Y: {position.y}</p>
    </div>
  );
}

export default MousePosition;
