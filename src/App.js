import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookList from "./pages/BookList";

function App() {
  return (
    <div>
      <nav>
        <ul>
          {/* Link - Used to navigate (underneath it's an anchor tag) */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {/* Routes - A container for a nested tree of elements that renders the branch that best matches the current location. */}
      <Routes>
        {/* Route - Declares an element that should be rendered at a certain URL path. */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
