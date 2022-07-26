import { provider } from "../firebase.config.js";
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
      const user = userCredential.user;
      console.log("Logged In!")
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Login Error: ${error.message}`)
    });
}

export function submitSignup(event, auth, data) {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log("Signed up!");
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Signup Error: ${errorMessage}`);
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
      // Sign-out successful.
      console.log("Logged out")
    })
    .catch(error => {
      // An error happened.
    });
}
