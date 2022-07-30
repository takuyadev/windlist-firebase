// Node Modules
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UilBars } from "@iconscout/react-unicons";
import { UilMultiply } from "@iconscout/react-unicons";

// Components
import { PrimaryButton } from "./Buttons";

// Utility
import { IsLoggedInContext } from "../modules/context/IsLoggedInContext";
import { submitLogout } from "../modules/firebase/HandleUserForm";
import { getAuth } from "firebase/auth";
import { AnimatePresence } from "framer-motion";
import { pageTransition } from "../modules/utils/animationData";

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const { isLoggedIn } = useContext(IsLoggedInContext);

  const auth = getAuth();
  const navigate = useNavigate();

  async function navigateToLoginOnLogout() {
    await submitLogout(auth, navigate);
  }

  function closeMenuOnNavigate(link) {
    navigate(link);
    setShowMenu(false);
  }

  return (
    <>
      <UilBars
        onClick={() => setShowMenu(prevState => !prevState)}
        className="flex md:hidden cursor-pointer"
      />
      <AnimatePresence>
        {showMenu && (
          <motion.nav
            variants={pageTransition}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed flex flex-col justify-center gap-16 w-screen h-screen top-0 px-8 z-40 bg-white font-bold"
          >
            <UilMultiply className="cursor-pointer absolute top-6 right-8 text-gray-500 hover:text-gray-900  "onClick={()=>setShowMenu(prevState=>!prevState)}></UilMultiply>
            <p
              className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 "
              onClick={() => closeMenuOnNavigate("/")}
            >
              Home
            </p>
            <p
              className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 "
              onClick={() => closeMenuOnNavigate("/About")}
            >
              About
            </p>
            {isLoggedIn ? (
              <>
                <p
                  className="cursor-pointer text-gray-500 hover:text-gray-900 duration-100 "
                  onClick={() => closeMenuOnNavigate("/Notes")}
                >
                  Your Notes
                </p>
                <PrimaryButton
                  handleOnClick={() => {
                    navigateToLoginOnLogout();
                    setShowMenu(false);
                  }}
                >
                  Logout
                </PrimaryButton>
              </>
            ) : (
              <PrimaryButton
                handleOnClick={() => closeMenuOnNavigate("/Login")}
              >
                Login
              </PrimaryButton>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenu;
