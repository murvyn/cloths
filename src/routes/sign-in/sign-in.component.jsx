import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoolgeUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user)
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoolgeUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
 