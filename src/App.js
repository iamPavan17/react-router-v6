import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookList from "./pages/BookList";
import Profile from "./pages/Profile";

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
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      {/* Routes - A container for a nested tree of elements that renders the branch that best matches the current location. */}
      <Routes>
        {/* Route - Declares an element that should be rendered at a certain URL path. */}
        <Route path="/" element={<Home />} />

        {/* Nested Routes */}
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        {/* Same as above */}
        <Route path="/books">
          {/* index is a boolean, saying that the route mathces exactly whatever the parent path is, which is "books"  */}
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        {/* Another example of Nested Routes */}
        {/* When we have one Route, which is calling another bunch of another Rooutes, we have to add "/*" at the end of the path */}
        <Route path="/profile/*" element={<Profile />} />

        {/* To redirect to default URL when the user goes to an unknown available URLS */}
        {/* <Route path="*" element={<Navigate to="/" replace />} />  */}
        {/* To redirect to a specifc component when the user goes to an unknown available URLS */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
