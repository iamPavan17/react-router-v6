import { Link, Outlet } from "react-router-dom";

export default function BookLayout() {
  return (
    <>
      <ul>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
        <li>
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          <Link to="/books/2">Book 2</Link>
        </li>
      </ul>
      {/* To render the child Routes */}
      <Outlet />
    </>
  );
}
