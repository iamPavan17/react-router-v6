import { Routes, Route, Link, NavLink } from "react-router-dom";

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
          {/* 
            params
            * replace - Boolean (when we click on back, we don't to go the previous page, instead we go to before the previous page)
            * reloadDocument - Boolean (when we click on this, page gets reloaded).
          */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* NavLink is same as Link component, with additional properties, 
            we can use NavLink, when we want to do things when the specific link is active.  */}
            <NavLink
              // if we don't want to these way of assigning styles for active link.
              // one more way is, by default NavLink will have the active className, when the link is active.
              // so we can define .active { ...styles } in a .css file. It will automatically apply the styles.
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/books"
            >
              Books
            </NavLink>
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
