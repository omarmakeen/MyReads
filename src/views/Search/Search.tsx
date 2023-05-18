import { FC } from 'react';
import { Book as BookInterface } from '../../interface/Book.interface';
import Book from '../../components/Book/Book';
import './Search.css';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import React from 'react';

const Search: FC<{
  isLoading: boolean,
  changeFilterValue: React.ChangeEventHandler<HTMLInputElement>;
  books: BookInterface[] | null
}> = (props: {
  isLoading: boolean,
  changeFilterValue: React.ChangeEventHandler<HTMLInputElement>;
  books: BookInterface[] | null
}) => {

  const navigate = useNavigate();

  const goToOverview = () => navigate('/');

  return (
    <>
      <div >
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={goToOverview}
            href="/#"
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={props.changeFilterValue}
            />
          </div>
        </div>

        <div id="search-testing-area" >
        {
          props.isLoading ?
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  (Array.isArray(props.books) && props.books.length) ? (props.books.map((book: BookInterface) => {
                    return <Book key={book.id} book={book} />
                  })) : (<h1 >No Books found</h1>)
                }
              </ol>
            </div> : <Spinner />
        }
        </div>
      </div>
    </>
  );
};

export default Search;
