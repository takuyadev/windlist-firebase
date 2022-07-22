import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { app, database } from './firebaseConfig'
import {
  collection, 
  addDoc,
  getDocs } from 'firebase/firestore'

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
   signInWithEmailAndPassword } from "firebase/auth";


function App() {
  const data = 
    { 
      email: "takuya.k.toyokawa@protonmail.com",
      password: "123456"
    }
  const collectionRef = collection(database, 'users')

  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();

  function handleSubmit(){
    // createUserWithEmailAndPassword(auth, data.email, data.password)
    // signInWithEmailAndPassword(auth, data.email, data.password)
    // signInWithPopup(auth, googleProvider)
    //   .then(res=>console.log(res))
    //   .catch(err=>console.log(err.message))
  addDoc(collectionRef, {
      email: data.email,
      password: data.password
    })
    .then(() => {
      alert('Data added')
    }).catch((err) =>{
      alert(err.emssage)
    })
  }

  async function getData(){
    getDocs(collectionRef)
    .then((response)=>{
      console.log(response.docs.map(item=>(
        {id: item.id, ...item.data()}
      )))
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={getData}>Get</button>
      </header>
    </div>
  );
}

export default App;
