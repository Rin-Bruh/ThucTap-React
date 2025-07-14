import { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
  const [bgColor, setBgColor] = useState('white');
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'gray'];

  return (
    <div className="color-picker-container" style={{ backgroundColor: bgColor }}>
      <h2 className="title">Pick a Color:</h2>
      <div className="buttons-container">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            className="color-button"
            style={{ backgroundColor: color, color: color === 'yellow' ? '#000' : '#fff' }}
          >
            {color}
          </button>
        ))}
      </div>
      <p className="current-color">Current Color: <strong>{bgColor}</strong></p>
    </div>
  );
}

export default ColorPicker;
