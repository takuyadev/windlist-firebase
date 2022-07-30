// Components
import { PrimaryButton, SecondaryButton } from "./Buttons";
import TextField from "./TextField";

// Utility
import { setTextField } from "../modules/utils/HandleTextField";
import { googleLogin } from "../modules/firebase/HandleUserForm";

function UserForm({ auth, handleOnSubmit, setState, submitText, googleText, setError }) {
  const GoogleLogo = <img src="./images/google_logo.svg" alt="Google Logo" />;
  return (
    <form className="flex flex-col gap-6 " onSubmit={handleOnSubmit}>
      <TextField
        name="email"
        label="Email"
        handleOnChange={e => setTextField(e, setState, "email")}
        id="email"
        placeholder="Enter email..."
      />
      <TextField
        name="password"
        label="Password"
        handleOnChange={e => setTextField(e, setState, "password")}
        type="password"
        id="password"
        placeholder="Enter password..."
      />
      <PrimaryButton type="submit">{submitText}</PrimaryButton>
      <hr />
      <SecondaryButton
        handleOnClick={() => googleLogin(auth, setError)}
        icon={GoogleLogo}
      >
        {googleText}
      </SecondaryButton>
    </form>
  );
}

UserForm.defaultProps = {
  title: "Default",
  description: "Default",
  buttonText: "Default",
  googleText: "Default"
};

export default UserForm;
