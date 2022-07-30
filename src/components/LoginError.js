import { Link } from "react-router-dom";

export function LoginError() {
  return (
    <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
      Please{" "}
      <span className="text-red-500 hover:text-red-300 duration-100">
        <Link to="/Login">log in</Link>
      </span>{" "}
      to your account to see your page.
    </div>
  );
}
