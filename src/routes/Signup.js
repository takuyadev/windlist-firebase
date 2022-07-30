// Node Modules
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"

// Components
import UserForm from "../components/UserForm";
import ToastNotfication from '../components/ToastNotification';

// Utility
import { submitSignup } from "../modules/firebase/HandleUserForm";
import { pageTransition } from "../modules/utils/animationData";

function Signup({ auth }) {
  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
 
  useEffect(()=>{
    if(error) {
      console.log("ran")
      setShowError(true)
    }
  },[error])

  useEffect(()=>{
    if(showError){
      setTimeout(()=>{
        setShowError(false)
        setError("")
        console.log("ran")
      },5000)
    }
  },[showError])

  return (
    <motion.div
    variants={pageTransition}
    initial="hidden"
    animate="visible"
    exit="hidden">
      <AnimatePresence>
        { showError && <ToastNotfication message={error}/>}
      </AnimatePresence>
      <h1 className="text-2xl text-center font-bold">Signup</h1>
      <Link to="/Login">
        <p className="mt-4 text-center text-red-500 font-bold hover:text-red-300 ease-out duration-200">
          Already registered? Signup instead.
        </p>
      </Link>
      <UserForm
        auth={auth}
        handleOnSubmit={e => submitSignup(e, auth, loginData, setError)}
        setState={setLoginData}
        submitText={"Signup"}
        googleText={"Sign up with Google"}
        setError={setError}
      />
    </motion.div>
  );
}

export default Signup;
