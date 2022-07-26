import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { PrimaryButton } from './Buttons'
import { submitLogout } from '../modules/HandleUserForm'
import { getAuth} from "firebase/auth";

function Header(){
    const auth = getAuth();
    
    function logOut(){
        submitLogout(auth);
    }

    return (
        <header className="sticky flex w-full p-4 justify-between border-b-2 border-b-gray-100 text-gray-500">
            <img className="w-16" src="./images/tailwind_logo.svg"/>
            <nav className="flex align-center gap-8 ">
                <Link to="/About">
                    About
                </Link>
                <PrimaryButton handleOnClick={logOut}>
                    Logout
                </PrimaryButton>
            </nav>
        </header>
    )
}

export default Header