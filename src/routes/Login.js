// Node Modules
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Components
import UserForm from "../components/UserForm";
import ToastNotfication from "../components/ToastNotification";

// Utility
import { submitLogin } from "../modules/firebase/HandleUserForm";
import { pageTransition } from "../modules/utils/animationData";

// Context
import { IsLoggedInContext } from "../modules/context/IsLoggedInContext";

function Login({ auth }) {
  const navigate = useNavigate();
  const { isLoggedIn }  = useContext(IsLoggedInContext)
  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
 
  useEffect(()=>{
    if(error) {
      setShowError(true)
    }
  },[error])

  useEffect(()=>{
    if(showError){
      setTimeout(()=>{
        setShowError(false)
        setError("")
      },5000)
    }
  },[showError])

  useEffect(()=>{
    if(isLoggedIn) navigate("/Notes")
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoggedIn])
  
  return (
    <motion.div
    variants={pageTransition}
    initial="hidden"
    animate="visible"
    exit="hidden">
      <AnimatePresence>
        { showError && <ToastNotfication message={error}/>}
      </AnimatePresence>
      <h1 className="text-2xl text-center font-bold">Login</h1>
      <Link to="/Signup">
        <p className="mt-4 text-center text-red-500 font-bold hover:text-red-300 ease-out duration-200">
          New user? Signup here instead.
        </p>
      </Link>
      <UserForm
        auth={auth}
        handleOnSubmit={e => submitLogin(e, auth, loginData, setError)}
        setState={setLoginData}
        submitText={"Login"}
        googleText={"Sign in with Google"}
        setError={setError}
      />
    </motion.div>
  );
}

export default Login;
