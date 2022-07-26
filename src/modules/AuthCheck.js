import { onAuthStateChanged } from "firebase/auth";

// Authentication logger
export function AuthState(auth) {
  onAuthStateChanged(auth, user => {
    if (user) {
      const uid = user.id;
      console.log("Logged In");
    } else {
      console.log("Logged out");
    }
  });
}
