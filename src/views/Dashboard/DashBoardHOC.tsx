import React from "react";
import { FC, useEffect } from 'react';
import { getBooks } from '../../redux-store/BookActions';
import { useSelector, useDispatch } from 'react-redux';
import { bookActions } from '../../redux-store/BookSlice';
import { BooksPerShelf } from '../../interface/BooksPerShelf.interface';

const DashBoardHOC = (props: {
    DashBoard: FC<{
      booksPerShelf: BooksPerShelf
    }>
}) => {
    const dispatch = useDispatch();

    const allBooksPerShelf: BooksPerShelf = useSelector((state: any) => state.books.allBooksPerShelf);

    useEffect(() => {
      dispatch(bookActions.searchForBooks({
        booksForQuery: null,
      }));
    }, [dispatch]);

    useEffect(() => {
      if (!allBooksPerShelf) {
        dispatch(getBooks() as any);
      }
    },[dispatch, allBooksPerShelf]);

  return (
    <>
    <props.DashBoard booksPerShelf={allBooksPerShelf} />
    </>
  )
};

export default DashBoardHOC;
