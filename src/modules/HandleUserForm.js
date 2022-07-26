import { useContext } from 'react'
import { database, provider } from "../firebase.config.js";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

export function submitLogin(event, auth, data) {
  event.preventDefault();
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      console.log(`Logged In: ${userCredential}`)
    })
    .catch(error => {
      console.log(`Signup Error: ${error.message}`);
    });
}

export function submitSignup(event, auth, data) {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      const uid = userCredential.user.uid
      setDoc(doc(database, "users", uid), {
        email: data.email,
        uid: uid
      });      
    })
    .catch(error => {
      console.log(`Signup Error: ${error.message}`);
    });
}

// Handle Login and Signup functions
export function googleLogin(auth) {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch(error => {
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

export function submitLogout(auth) {
  signOut(auth)
    .then(() => {
      console.log("Logged out")
    })
    .catch(error => {
      console.log(`Error: ${error.message}`)
    });
}
