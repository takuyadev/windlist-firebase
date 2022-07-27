import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth } from 'firebase/auth'
import Header from "./components/Header";
import UserForm from "./routes/UserForm";
import TodoList from "./routes/TodoList";
import Footer from "./components/Footer";
import { onAuthStateChanged } from "firebase/auth";

// Authentication logger
function App() {
  const [auth, setAuth] = useState(getAuth());
  const [userId, setUserId] = useState()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });


  useEffect(()=>{
    onAuthStateChanged(auth, user => {
      if (user) {
        setAuth(user)
        setUserId(user.uid)
        console.log(`Logged in: ${user.uid}`);
      } else {
        setAuth(null)
        setUserId("")
        console.log(`Logged out`);
      }
    });
  },[])

  return (
    <div className="flex flex-col gap-6">
      <Header />
      <main className="mx-12">
        <Routes>
          <Route
            path="/"
            element={
              auth  === null ? <UserForm setLoginData={setLoginData} loginData={loginData} /> : <TodoList uid={userId}/>
            }
          />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
