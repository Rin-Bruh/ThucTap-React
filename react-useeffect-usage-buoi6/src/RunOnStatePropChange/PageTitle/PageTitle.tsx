import React, { useState, useEffect } from 'react';
import './PageTitle.css';

function PageTitle() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    document.title = title || 'React App';
  }, [title]);

  return (
    <div className="page-title">
      <h2>Page Title Updater</h2>
      <input
        type="text"
        placeholder="Enter page title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}

export default PageTitle;
