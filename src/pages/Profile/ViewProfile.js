import { useSearchParams } from "react-router-dom";

export default function ViewProfile() {
  //  The useSearchParams hook is used to read and modify the query string in the URL for the current location.
  //   Returns an array.
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("user"); // example: http://localhost:3000/profile?user=3

  return (
    <div>
      <h1>ViewProfile</h1>
      <p>User ID - {userId}</p>
      <button
        onClick={() =>
          setSearchParams({ user: Math.floor(Math.random() * 10) + 1 })
        }
      >
        Update user param
      </button>
    </div>
  );
}
