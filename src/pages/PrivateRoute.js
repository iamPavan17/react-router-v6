import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? <Outlet /> : <Navigate to="/" state={"Not authorized"} />}
    </>
  );
}
