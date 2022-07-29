// Node Modules
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IsLoggedInContext } from "../modules/context/IsLoggedInContext";
import { PrimaryButton } from "./Buttons";
import { submitLogout } from "../modules/firebase/HandleUserForm";
import { getAuth } from "firebase/auth";

function Header() {
  const { isLoggedIn } = useContext(IsLoggedInContext);
  const auth = getAuth();
  const navigate = useNavigate();

  async function navigateToLoginOnLogout() {
    await submitLogout(auth, navigate);
  }

  return (
    <header className="sticky flex h-full w-full p-4 justify-between border-b-2 border-b-gray-100 text-gray-500">
      <img className="w-16" src="./images/tailwind_logo.svg" />
      <nav className="flex items-center gap-8 ">
        <Link to="/"> Home </Link>
        <Link to="/About"> About </Link>
        {isLoggedIn ? (
          <>
            <Link to="/Notes"> Your Notes </Link>
            <PrimaryButton handleOnClick={navigateToLoginOnLogout}>
              Logout
            </PrimaryButton>
          </>
        ) : (
          <Link to="/Login">
            <PrimaryButton>Login</PrimaryButton>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
