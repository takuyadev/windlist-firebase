// Node Modules
import { Link } from "react-router-dom";

// Components
import UserForm from "../components/UserForm";

// Utility
import { submitSignup } from "../modules/firebase/HandleUserForm";

function Signup({ auth, loginData, setLoginData }) {
  return (
    <>
      <h1 className="text-2xl text-center font-bold">Signup</h1>
      <Link to="/Login">
        <p className="mt-4 text-center text-red-500 font-bold hover:text-red-300 ease-out duration-200">
          Already registered? Signup instead.
        </p>
      </Link>
      <UserForm
        auth={auth}
        handleOnSubmit={e => submitSignup(e, auth, loginData)}
        setState={setLoginData}
        submitText={"Signup"}
        googleText={"Sign up with Google"}
      />
    </>
  );
}

export default Signup;
