import React from 'react';

interface BookItemProps {
  title: string;
  author: string;
  year: number;
}

const BookItem: React.FC<BookItemProps> = ({ title, author, year }) => {
  return (
    <div className="book-card">
      <h4>📘 {title}</h4>
      <p>👤 {author}</p>
      <p>📅 {year}</p>
    </div>
  );
};

export default BookItem;
