import React from 'react';
import BookItem from './BookItem';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      <h2>📚 Book List</h2>
      <div className="book-grid">
        {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
