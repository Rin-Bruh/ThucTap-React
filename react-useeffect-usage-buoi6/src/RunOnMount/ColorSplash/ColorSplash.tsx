import React, { useEffect } from 'react';

function ColorSplash() {
  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    // Cleanup: đặt lại màu nền nếu component bị unmount
    return () => {
      document.body.style.backgroundColor = 'white';
    };
  }, []);

  return <h2 style={{ color: '#fff' }}>ColorSplash Component</h2>;
}

export default ColorSplash;
