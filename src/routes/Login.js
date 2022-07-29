// Node Modules
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import UserForm from "../components/UserForm";

// Utility
import { submitLogin } from "../modules/firebase/HandleUserForm";

// Context
import { IsLoggedInContext } from "../modules/context/IsLoggedInContext";

function Login({ auth, loginData, setLoginData }) {
  const navigate = useNavigate();
  const { isLoggedIn }  = useContext(IsLoggedInContext)

  useEffect(()=>{
    if(isLoggedIn) navigate("/Notes")
  },[isLoggedIn])
  
  return (
    <>
      <h1 className="text-2xl text-center font-bold">Login</h1>
      <Link to="/Signup">
        <p className="mt-4 text-center text-red-500 font-bold hover:text-red-300 ease-out duration-200">
          New user? Signup here instead.
        </p>
      </Link>
      <UserForm
        auth={auth}
        handleOnSubmit={e => submitLogin(e, auth, loginData)}
        setState={setLoginData}
        submitText={"Login"}
        googleText={"Sign in with Google"}
      />
    </>
  );
}

export default Login;
