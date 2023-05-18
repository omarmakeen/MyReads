import "./App.css";
import { useState } from "react";
import DashBoard from "./views/Dashboard/DashBoard";
import DashBoardHOC from "./views/Dashboard/DashBoardHOC";
import Search from "./views/Search/Search";
import SearchHOC from './views/Search/SearchHOC';
import { BrowserRouter} from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        {showSearchPage ? (
          <SearchHOC Search={Search} />
        ) : (
          <DashBoardHOC DashBoard={DashBoard} />
        )}
      </BrowserRouter>
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}

export default App;
