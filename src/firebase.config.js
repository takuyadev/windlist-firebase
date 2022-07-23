// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBkfQ5vgDXoGp6imre33Pjwm7makJgSNDg",

  authDomain: "fir-tutorial-be746.firebaseapp.com",

  projectId: "fir-tutorial-be746",

  storageBucket: "fir-tutorial-be746.appspot.com",

  messagingSenderId: "314749522357",

  appId: "1:314749522357:web:f3f3b19b3d5722f3a3c9fc",

  measurementId: "G-3349M4ES83"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const database = getFirestore();

export const provider = new GoogleAuthProvider();