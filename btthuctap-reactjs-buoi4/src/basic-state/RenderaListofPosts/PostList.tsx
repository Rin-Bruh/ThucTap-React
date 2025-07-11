import React from 'react';
import PostItem from './PostItem';
import './PostList.css';

interface Post {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  author: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="post-list-container">
      <h1>Blog Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            title={post.title}
            content={post.content}
            thumbnail={post.thumbnail}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
};

export default PostList;