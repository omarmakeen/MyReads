import "./DropDown.css";
import React from "react";

const DropDown = (props: {
  currentShelf: string;
  bookId: string;
  ChangeShelfHandler: React.ChangeEventHandler<HTMLSelectElement>;
}) => {
  const shelfs = [
    {
      text: "Currently Reading",
      value: "currentlyReading",
    },
    {
      text: "Want to Read",
      value: "wantToRead",
    },
    {
      text: "Read",
      value: "read",
    },
  ];

  return (
    <div className="book-shelf-changer">
      <select
        data-testid="shelf-dropdown"
        value={props.currentShelf}
        onChange={props.ChangeShelfHandler}
      >
        <option value="none" disabled>
          Move to...
        </option>
        {shelfs.map((shelf) => {
          return (
            <option key={shelf.value} value={shelf.value}>
              {shelf.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
