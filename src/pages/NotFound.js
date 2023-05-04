import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // When we want to redirect the user based on from submission, we can user useNavigate hook.
  const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate(-1); // -1 means going to previous page. -2 means go backwards two pages and so on.
    navigate("/");
  };

  return (
    <div>
      <h1>NotFound</h1>
      <button onClick={handleNavigate}>Go back to home page.</button>
    </div>
  );
}
