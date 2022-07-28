// Imports
import { database, provider } from "../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";

// Form Submition functions for Login & Signup for Firebase
// Then and catch can receive for data if needed, but simple app doesn't require larger functions
export function submitLogin(event, auth, data) {
  console.log(auth)
  event.preventDefault();
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => console.log(`Logged In: ${userCredential}`))
    .catch(error => console.log(`Signup Error: ${error.message}`));
}

export function submitSignup(event, auth, data) {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(userCredential => {
      const uid = userCredential.user.uid;
      setDoc(doc(database, "users", uid), {
        email: data.email,
        uid: uid
      });
    })
    .catch(error => console.log(`Signup Error: ${error.message}`));
}

// Google Login Authentication Firebase
export function googleLogin(auth) {
  signInWithPopup(auth, provider).catch(error => alert(error));
}

// Delete authentication status of Firebase
export function submitLogout(auth) {
  signOut(auth)
    .then(() => console.log("Logged out"))
    .catch(error => console.log(`Error: ${error.message}`));
}
