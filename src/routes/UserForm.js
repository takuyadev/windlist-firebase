import { useState } from "react";
import { UilSignInAlt } from "@iconscout/react-unicons";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import TextField from "../components/TextField";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

import { AuthState } from "../modules/AuthCheck";
import { submitLogin, submitSignup, googleLogin } from "../modules/HandleUserForm";

export default function UserForm({ setLoginData, loginData }) {
  const [tabs, setTabs] = useState("signup");

  const auth = getAuth();
  AuthState(auth);
  const GoogleLogo = <img src="./images/google_logo.svg"></img>

  //Set State for form inputs
  function getEmailInput(e) {
    setLoginData(prevInput => ({
      ...prevInput,
      email: e.target.value
    }));
  }

  function getPasswordInput(e) {
    setLoginData(prevInput => ({
      ...prevInput,
      password: e.target.value
    }));
  }

  //Swap between Signup and Login Form
  function switchTabs() {
    setTabs(prevTab => (prevTab === "signup" ? "login" : "signup"));
  }

  return (
    <form
      className="flex flex-col gap-6 "
      onSubmit={
        tabs === "signup" ? 
        (event) => submitSignup(event, auth, loginData) :
        (event) => submitLogin(event, auth, loginData)
      }
    >
      <div className="flex flex-col place-items-center text-center">
        <UilSignInAlt className="mb-2" />
        <h1 className="mb-2 text-2xl font-bold  ">
          {tabs === "signup" ? "Signup to WindList" : "Login to WindList"}
        </h1>
        <p className="text-center text-gray-500">
          {tabs === "signup"
            ? "Get started on one of the most original projects seen by developers."
            : "Welcome back to the best To-do list of all time."}
        </p>
      </div>
      <TextField
        label="Email"
        handleOnChange={getEmailInput}
        id="email"
        placeholder="Enter email..."
      />
      <TextField
        label="Password"
        handleOnChange={getPasswordInput}
        type="password"
        id="password"
        placeholder="Enter password..."
      />
      <PrimaryButton type="submit">
        {tabs === "signup" ? "Signup" : "Login"}
      </PrimaryButton>
      <hr />
      <SecondaryButton
        handleOnClick={()=>googleLogin(auth)}
        icon={GoogleLogo}
      >
        Sign in with Google
      </SecondaryButton>
      <p onClick={switchTabs} className="text-center cursor-pointer">
        {tabs === "signup" ?
          "Already have an account? Login." : 
          "Already have an account? Signup."
        }
      </p>
    </form>
  );
}
