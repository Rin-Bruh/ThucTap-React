import React, { useState } from 'react';
import './InputDisplay.css';

function InputDisplay() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); 
  };

  return (
    <div className="input-container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..." 
        className="text-input"
      />
      <p className="output">You typed: <span>{inputValue}</span></p>
    </div>
  );
}

export default InputDisplay;
