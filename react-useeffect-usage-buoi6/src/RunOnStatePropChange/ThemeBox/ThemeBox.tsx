import React, { useState, useEffect } from 'react';
import './ThemeBox.css';

function ThemeBox() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const box = document.querySelector('.theme-box') as HTMLElement;
    if (box) {
      box.style.backgroundColor = theme === 'light' ? '#f1f5f9' : '#1e293b';
      box.style.color = theme === 'light' ? '#000' : '#fff';
    }
  }, [theme]);

  return (
    <div className="theme-box">
      <h2>Theme Switcher</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeBox;
