import { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false); 

  const handleClick = () => {
    setIsOn(prevState => !prevState); 
  };

  return (
    <button
      className={`toggle-btn${isOn ? ' active' : ''}`}
      onClick={handleClick}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

export default ToggleButton;
