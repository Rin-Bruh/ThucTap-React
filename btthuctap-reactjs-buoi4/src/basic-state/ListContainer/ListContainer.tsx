import React from 'react';
import './ListContainer.css';

interface ListContainerProps {
  showList: boolean;
  items: string[];
}

const ListContainer: React.FC<ListContainerProps> = ({ showList, items }) => {
  return (
    <div className="list-container">
      <h3>List Container</h3>

      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListContainer;
