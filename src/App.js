// Node  Modules
import { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { getAuth } from 'firebase/auth'

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Login from './routes/Login'
import Signup from "./routes/Signup";
import Notes from "./routes/Notes";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { submitLogout } from './modules/firebase/HandleUserForm'
import { onAuthStateChanged } from "firebase/auth";


//Context
import { IsLoggedInContext } from "./modules/context/IsLoggedInContext";


// Authentication logger
function App() {
  const auth = getAuth();
  const [userId, setUserId] = useState()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const { setIsLoggedIn } = useContext(IsLoggedInContext)

  // Check for Firebase Authentication
  onAuthStateChanged(auth, user => {
    if (user) {
      setUserId(user.uid)
      setIsLoggedIn(true)
    }
    else {
      setUserId("")
      setIsLoggedIn(false)
    }
  });

  return (
    <div className="flex flex-col gap-6">
      <Header 
        auth={auth}
        handleLogOut={()=>submitLogout(auth)}
      />
      <main className="mx-12">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Login" element={<Login auth={auth} loginData={loginData} setLoginData={setLoginData}/>}/>
          <Route path="/Signup" element={<Signup auth={auth} loginData={loginData} setLoginData={setLoginData}/>}/>
          <Route path="/Notes" element={<Notes uid={userId}/>}/>
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
