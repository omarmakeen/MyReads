import React, { FC } from "react";
import { BooksPerShelf } from "../../interface/BooksPerShelf.interface";
import BookShelf from "../../components/BookShelf/BookShelf";
import Spinner from "../../components/Spinner/Spinner";
import "./DashBoard.css";

const DashBoard: FC<{
  booksPerShelf: BooksPerShelf;
}> = (props: { booksPerShelf: BooksPerShelf }) => {
  return (
    <>
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {props.booksPerShelf ? (
        <div className="list-books-content">
          <BookShelf
            shelfName="Currently Reading"
            books={props.booksPerShelf["currentlyReading"]}
          />
          <BookShelf
            shelfName="Want To Read"
            books={props.booksPerShelf["wantToRead"]}
          />
          <BookShelf shelfName="Read" books={props.booksPerShelf["read"]} />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default DashBoard;
