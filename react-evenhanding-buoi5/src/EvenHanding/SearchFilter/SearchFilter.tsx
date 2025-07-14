import React, { useState } from 'react';
import './SearchFilter.css';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon', 'Strawberry', 'Mango'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-filter-container">
      <h2 className="title">Search Fruits</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <ul className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <li key={item}>{item}</li>)
        ) : (
          <li className="no-results">No matching fruits</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
