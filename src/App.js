import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import UserForm from './routes/UserForm'
import TodoList from './routes/TodoList'
import Footer from './components/Footer'

function App() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  

  return (
    <div className="flex flex-col gap-6">
      <Header/>
      <main className="mx-12">
        <Routes>
          <Route 
            path="/Login"
            element={
              <UserForm 
                setLoginData={setLoginData}
                loginData={loginData}
              />
            }
          />
          <Route 
            path="/TodoList"
            element={
              <TodoList />
            }
          />
        </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
