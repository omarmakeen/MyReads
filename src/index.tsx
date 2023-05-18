import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import store from './redux-store/index';
// import { configureStore } from '@reduxjs/toolkit';
// import bookSlice from './redux-store/BookSlice';

// const store = configureStore({
//   reducer: { books: bookSlice.reducer },
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
