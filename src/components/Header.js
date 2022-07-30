// Node Modules
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import { PrimaryButton } from "./Buttons";
import MobileMenu from "./MobileMenu";

// Utility
import { IsLoggedInContext } from "../modules/context/IsLoggedInContext";
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
    <header className="sticky z-20 bg-white flex justify-between items-center w-full p-4 border-b-2 border-b-gray-100 text-gray-500 ">
      <Link to="/">
        <p className="text-xl font-bold">
          Minima<span className="text-red-500">list</span>
        </p>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
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

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
}

export default Header;
