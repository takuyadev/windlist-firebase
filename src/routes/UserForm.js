import { useState } from "react";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { database, provider } from '../firebase.config.js'
import { collection, addDoc } from 'firebase/firestore'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

export default function UserForm({ setLoginData, loginData }) {
  const [tabs, setTabs] = useState("signup")
  const auth = getAuth();

  function getEmailInput(e) {
    setLoginData((prevInput) => ({
      ...prevInput,
      email: e.target.value,
    }));
  }

  function getPasswordInput(e) {
    setLoginData((prevInput) => ({
      ...prevInput,
      password: e.target.value,
    }));
  }

  async function submitSignup(e) {
    e.preventDefault();

    //Get user collection reference, then add object to collection
    await addDoc(collection(database, "users"), {
      email: loginData.email,
      password: loginData.password
    })
  }

  function googleLogin(){
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <form onSubmit={submitSignup} className="flex flex-col gap-6 ">
      <div>
        <h1 className="mb-2 text-2xl font-bold text-center ">Signup to WindList</h1>
        <p className="text-center text-gray-500">Get started on one of the most original projects seen by developers.</p>
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
        placeholder="Enter email..."
      />
      <Button type="submit">Submit</Button>
      <hr />
      <Button handleOnClick={googleLogin}>Sign in with Google</Button>
      <p className="text-center"> Already have an account? Login. </p>
    </form>
  );
}
