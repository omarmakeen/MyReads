import Book from '../Book/Book';
import { Book as BookInterface } from '../../interface/Book.interface';
import './BookShelf.css';
import React from 'react';

const BookShelf = (props: {
  shelfName: string,
  books: BookInterface[]
}) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            (Array.isArray(props.books) && props.books.length) ? (props.books.map((book: BookInterface) => {
              return <Book key={book.id} book={book} />
            })) : (<h1 style={{color: '#2e7c31'}}> No Books For This Shelf</h1>)
          }
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
