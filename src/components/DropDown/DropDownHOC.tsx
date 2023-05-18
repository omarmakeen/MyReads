import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../../redux-store/BookActions';
import React from 'react';

const DropDownHOC = (props: {
    DropDown: FC<{
        bookId: string;
        currentShelf: 'currentlyReading' | 'wantToRead' | 'read' | 'none';
        ChangeShelfHandler: React.ChangeEventHandler<HTMLSelectElement>;
    }>;
    bookId: string;
    currentShelf: any;
}) => {
    const dispatch = useDispatch();

    const ChangeShelfHandler = (event: any) => {

        const newShelf = event.target.value;

        const currentShelf = props.currentShelf;

        dispatch(updateBook(props.bookId, newShelf, currentShelf) as any);
    };

    return (
        <>
            <props.DropDown bookId={props.bookId} currentShelf={props.currentShelf} ChangeShelfHandler={ChangeShelfHandler} />
        </>
    )
};

export default DropDownHOC;
