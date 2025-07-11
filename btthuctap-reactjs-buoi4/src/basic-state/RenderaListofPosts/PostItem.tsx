import React, { useState } from 'react';
import './PostItem.css';

interface PostItemProps {
  title: string;
  content: string;
  thumbnail: string;
  author: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, content, thumbnail, author }) => {
  const [showContent, setShowContent] = useState(false);

  const handleToggleContent = () => {
    setShowContent(prev => !prev);
  };

  return (
    <div className="post-card">
      <div className="post-thumbnail">
        <img src={thumbnail || 'https://picsum.photos/seed/gallery1/400/300'} alt={title} />
      </div>
      <div className="post-content">
        <h3>{title}</h3>
        {showContent && (
          <><p className="post-author">By: {author}</p><p>{content}</p></>
        )}
        <button className="read-more" onClick={handleToggleContent}>{showContent ? 'Hide Details' : 'View Details'}</button>
      </div>
    </div>
  );
};

export default PostItem;
