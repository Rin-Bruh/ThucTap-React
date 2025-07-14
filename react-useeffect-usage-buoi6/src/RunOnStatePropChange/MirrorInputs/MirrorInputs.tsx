import React, { useState, useEffect } from 'react';
import './MirrorInputs.css';

function MirrorInputs() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');

  useEffect(() => {
    setInputB(inputA);
  }, [inputA]);

  return (
    <div className="mirror-inputs">
      <h2>Mirror Inputs</h2>
      <input
        type="text"
        placeholder="Input A"
        value={inputA}
        onChange={(e) => setInputA(e.target.value)}
      />
      <input
        type="text"
        placeholder="Input B (mirrored)"
        value={inputB}
        onChange={(e) => setInputB(e.target.value)} // vẫn có thể nhập tay ở B
      />
    </div>
  );
}

export default MirrorInputs;
