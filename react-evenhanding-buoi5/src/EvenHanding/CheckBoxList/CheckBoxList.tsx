import React, { useState } from 'react';
import './CheckBoxList.css';

function CheckBoxList() {
  const items = ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedItems(prev => [...prev, value]);
    } else {
      setSelectedItems(prev => prev.filter(item => item !== value));
    }
  };

  return (
    <div className="checkbox-list-container">
      <h2 className="title">Select Your Skills:</h2>
      <ul className="checkbox-list">
        {items.map(item => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                value={item}
                onChange={handleChange}
                checked={selectedItems.includes(item)}
              />
              {item}
            </label>
          </li>
        ))}
      </ul>
      <div className="selected-output">
        <strong>Selected:</strong> {selectedItems.length > 0 ? selectedItems.join(', ') : 'None'}
      </div>
    </div>
  );
}

export default CheckBoxList;
