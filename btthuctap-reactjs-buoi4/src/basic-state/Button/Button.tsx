import React from 'react';
import './Button.css';

type ButtonType = 'primary' | 'outline' | 'default' | 'text' | 'link';

interface ButtonProps {
  text: string;
  type: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  const className = `btn btn-${type}`;

  return (
    <button className={className}>{text}</button>
  );
};

export default Button;