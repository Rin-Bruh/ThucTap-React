import React, { useState } from 'react';
import './HoverBox.css';

function HoverBox() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="hover-box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? 'Hello there! 👋' : 'Hover over me'}
    </div>
  );
}

export default HoverBox;
