import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton: React.FC = () => {
  const [likesCount, setLikesCount] = useState<number>(0);

  const handleLike = () => {
    setLikesCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setLikesCount(0);
  };

  return (
    <div className="like-panel">
      <div className="like-icon">❤️</div>
      <h3>Like ({likesCount})</h3>

      <button className="dark-btn" onClick={handleLike}>
        ♡ Like
      </button>

      <button className="light-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default LikeButton;
