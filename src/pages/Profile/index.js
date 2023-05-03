import { Routes, Route, Link } from "react-router-dom";

import EditProfile from "./EditProfile";
import ViewProfile from "./ViewProfile";

export default function index() {
  return (
    <>
      <Routes>
        <Route index element={<ViewProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
      <Link to="/profile/edit-profile">Edit Profile</Link>
    </>
  );
}
