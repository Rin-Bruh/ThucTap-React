import React, { useState } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setCurrentTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`theme-container ${currentTheme}`}>
      <p>Current Theme: <strong>{currentTheme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
