// Node Modules
import { Link } from "react-router-dom";

// Components
import UserForm from "../components/UserForm";

// Utility
import { submitLogin } from "../modules/firebase/HandleUserForm";

function Login({ auth, loginData, setLoginData }) {
  return (
    <>
      <h1 className="text-2xl text-center font-bold">Login</h1>
      <Link to="/Signup">
        <p className="mt-4 text-center text-red-500 font-bold hover:text-red-300 ease-out duration-200">New user? Signup here instead.</p>
      </Link>
      <UserForm
        auth={auth}
        handleOnSubmit={e => submitLogin(e, auth, loginData)}
        setState={setLoginData}
        submitText={"Login"}
        googleText={"Sign in with Google"}
      />
    </>
  );
}

export default Login;
