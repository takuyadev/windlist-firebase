// Node Modules
import { useState } from "react";
import { Link } from 'react-router-dom'
import { PrimaryButton } from "./Buttons";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { submitLogout } from "../modules/firebase/HandleUserForm";

function Header() {
  const auth = getAuth();
  const [isLoggedin, setIsLoggedin] = useState(false);

  onAuthStateChanged(auth, user => {
    if (user) setIsLoggedin(true);
    else setIsLoggedin(false);
  });

  return (
    <header className="sticky flex h-full w-full p-4 justify-between align-centerborder-b-2 border-b-gray-100 text-gray-500">
      <img className="w-16" src="./images/tailwind_logo.svg" />
      <nav className="flex h-full align-center gap-8 ">
        <Link to="/Home"> Home </Link>
        <Link to="/About"> About </Link>
        {isLoggedin ? 
          <PrimaryButton handleOnClick={() => submitLogout(auth)}>
            Logout
          </PrimaryButton> :
          <Link to="/Login">
            <PrimaryButton>
                Login
            </PrimaryButton> 
          </Link>
        }
      </nav>
    </header>
  );
}

export default Header;
